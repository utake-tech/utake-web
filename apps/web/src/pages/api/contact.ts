export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

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

  const { error } = await resend.emails.send({
    from: "UTAKE TECH <onboarding@resend.dev>",
    to: ["utaketech@gmail.com"],
    replyTo: correo,
    subject: `Nuevo contacto: ${nombre}${empresa ? ` — ${empresa}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#7C3AED">Nuevo mensaje desde utake.io</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;color:#64748B;font-size:14px;width:120px">Nombre</td>
            <td style="padding:8px 0;font-size:14px;color:#0F172A"><strong>${nombre}</strong></td>
          </tr>
          ${empresa ? `<tr>
            <td style="padding:8px 0;color:#64748B;font-size:14px">Empresa</td>
            <td style="padding:8px 0;font-size:14px;color:#0F172A">${empresa}</td>
          </tr>` : ""}
          <tr>
            <td style="padding:8px 0;color:#64748B;font-size:14px">Correo</td>
            <td style="padding:8px 0;font-size:14px;color:#0F172A"><a href="mailto:${correo}" style="color:#7C3AED">${correo}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#64748B;font-size:14px;vertical-align:top">Reto técnico</td>
            <td style="padding:8px 0;font-size:14px;color:#0F172A;white-space:pre-wrap">${reto}</td>
          </tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return new Response(
      JSON.stringify({ error: "No se pudo enviar el mensajee. Inténtalo de nuevo." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ ok: true }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
