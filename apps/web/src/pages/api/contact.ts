export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const nombre = (data.get("nombre") as string)?.trim();
  const empresa = (data.get("empresa") as string)?.trim();
  const correo = (data.get("correo") as string)?.trim();
  const reto = (data.get("reto") as string)?.trim();

  if (!nombre || !correo || !reto) {
    return new Response(
      JSON.stringify({ error: "Faltan campos requeridos." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    return new Response(
      JSON.stringify({ error: "El correo no es válido." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (
    nombre.length > 100 ||
    correo.length > 254 ||
    reto.length > 2000 ||
    (empresa && empresa.length > 100)
  ) {
    return new Response(
      JSON.stringify({ error: "Uno o más campos superan la longitud máxima permitida." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { error } = await resend.emails.send({
    from: "UTAKE TECH <contact@utake.io>",
    to: ["utaketech@gmail.com"],
    replyTo: correo,
    subject: `Nuevo contacto: ${escapeHtml(nombre)}${empresa ? ` — ${escapeHtml(empresa)}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#7C3AED">Nuevo mensaje desde utake.io</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;color:#64748B;font-size:14px;width:120px">Nombre</td>
            <td style="padding:8px 0;font-size:14px;color:#0F172A"><strong>${escapeHtml(nombre)}</strong></td>
          </tr>
          ${empresa ? `<tr>
            <td style="padding:8px 0;color:#64748B;font-size:14px">Empresa</td>
            <td style="padding:8px 0;font-size:14px;color:#0F172A">${escapeHtml(empresa)}</td>
          </tr>` : ""}
          <tr>
            <td style="padding:8px 0;color:#64748B;font-size:14px">Correo</td>
            <td style="padding:8px 0;font-size:14px;color:#0F172A"><a href="mailto:${escapeHtml(correo)}" style="color:#7C3AED">${escapeHtml(correo)}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748B;font-size:14px;vertical-align:top">Consulta</td>
            <td style="padding:8px 0;font-size:14px;color:#0F172A;white-space:pre-wrap">${escapeHtml(reto)}</td>
          </tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ error: "No se pudo enviar el mensaje. Inténtalo de nuevo." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ ok: true }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
