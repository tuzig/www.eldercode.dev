import { z } from "zod";

// Schema for the RFQ form data
const RfqFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  userJourneys: z.string(),
});

// Schema for the "Coming Soon" form data
const ComingSoonSchema = z.object({
  email: z.string().email(),
});

export default async (req: Request) => {
  try {
    const { payload } = await req.json();
    const { data, form_name } = payload;

    if (form_name === "coming-soon") {
      // Handle the "Coming Soon" form
      const { email } = ComingSoonSchema.parse(data);

      const airtableApiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`;

      const response = await fetch(airtableApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
        body: JSON.stringify({
          fields: {
            Email: email,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error sending data to Airtable:", errorData);
        return new Response(JSON.stringify({ message: "Error sending data to Airtable" }), {
          status: 500,
        });
      }

      return new Response(JSON.stringify({ message: "Data sent to Airtable successfully" }), {
        status: 200,
      });

    } else if (form_name === "rfq") {
      // Handle the RFQ form (current Resend logic)
      const { name, email, userJourneys } = RfqFormSchema.parse(data);
      
      // NOTE: Resend is not configured here. This is a placeholder.
      // You would need to re-add your Resend API key and logic here if you want to keep it.
      console.log(`RFQ form submission for ${email}`);

      return new Response(JSON.stringify({ message: "RFQ form processed" }), {
        status: 200,
      });

    } else {
      return new Response(JSON.stringify({ message: "Unknown form" }), {
        status: 400,
      });
    }

  } catch (error) {
    console.error("Function error:", error);
    return new Response(JSON.stringify({ message: "Invalid request or validation failed" }), {
      status: 400,
    });
  }
};