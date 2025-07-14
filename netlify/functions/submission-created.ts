import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Schema for the form data
const FormDataSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  userJourneys: z.string(),
});

export default async (req: Request) => {
  try {
    const { payload } = await req.json();
    const { data } = payload;

    // Validate the form data against the schema
    const { name, email, userJourneys } = FormDataSchema.parse(data);

    // Send the email using Resend
    const { error } = await resend.emails.send({
      from: "ElderCode <rfq@eldercode.dev>",
      to: email,
      subject: `ElderCode next steps`,
      html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${userJourneys}</p>`,
    });

    if (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Function error:", error);
    return new Response(JSON.stringify({ message: "Invalid request or validation failed" }), {
      status: 400,
    });
  }
};
