import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      // TODO: Remplacer par votre domaine vérifié, ex: "Portfolio <contact@votredomaine.com>"
      from: "Portfolio <onboarding@resend.dev>",
      to: "rayanehadi41@gmail.com",
      replyTo: email,
      subject: `[Portfolio] Message de ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#030303;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#030303;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
        <!-- Header -->
        <tr><td style="padding-bottom:32px;text-align:center;">
          <span style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#818cf8;">Portfolio &middot; Nouveau message</span>
        </td></tr>
        <!-- Card -->
        <tr><td style="background-color:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:32px;">
          <!-- Sender info -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              <td width="48" style="vertical-align:top;">
                <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;">
                  <table cellpadding="0" cellspacing="0"><tr><td style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);text-align:center;vertical-align:middle;font-size:18px;font-weight:600;color:#ffffff;">${name.charAt(0).toUpperCase()}</td></tr></table>
                </div>
              </td>
              <td style="padding-left:12px;vertical-align:center;">
                <p style="margin:0;font-size:16px;font-weight:600;color:#ffffff;">${name}</p>
                <a href="mailto:${email}" style="margin:0;font-size:13px;color:#818cf8;text-decoration:none;">${email}</a>
              </td>
            </tr>
          </table>
          <!-- Divider -->
          <div style="height:1px;background:linear-gradient(to right,transparent,rgba(255,255,255,0.1),transparent);margin-bottom:24px;"></div>
          <!-- Message -->
          <p style="margin:0;font-size:14px;line-height:1.7;color:#d4d4d8;">${message.replace(/\n/g, "<br />")}</p>
        </td></tr>
        <!-- Reply button -->
        <tr><td style="padding-top:24px;text-align:center;">
          <a href="mailto:${email}" style="display:inline-block;padding:10px 24px;background-color:#ffffff;color:#000000;font-size:13px;font-weight:600;text-decoration:none;border-radius:999px;">Répondre à ${name}</a>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding-top:32px;text-align:center;">
          <p style="margin:0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#52525b;">&copy; ${new Date().getFullYear()} Rayane Hadi &middot; Portfolio</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
