import { Resend } from "resend";
import { contactEmailTemplate } from "./emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["mosespereiracr@gmail.com"],
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      html: contactEmailTemplate({ name, email, message }),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(
      JSON.stringify({ error: "Email failed" }),
      { status: 500 }
    );
  }
}
