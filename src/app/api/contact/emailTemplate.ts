export function contactEmailTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>📬 New Portfolio Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br />")}</p>
      <hr />
      <p style="font-size: 12px; color: #666;">
        Sent from your portfolio contact form.
      </p>
    </div>
  `;
}
