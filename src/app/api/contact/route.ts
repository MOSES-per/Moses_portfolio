import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { contactEmailTemplate } from "./emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = Redis.fromEnv();
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"), // 3 requests per 10 minutes
});

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return new Response(
      JSON.stringify({ error: "Too many requests" }),
      { status: 429 }
    );
  }

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
