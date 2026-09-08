import { createClient } from "npm:@supabase/supabase-js@2.116.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT_EMAIL = "acorndentist@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Always save to database so no enquiry is lost
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone: phone || null,
        service: service || null,
        message,
      });

    if (dbError) console.error("Database save failed:", dbError.message);

    // Send email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.error("RESEND_API_KEY secret is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const serviceLabels: Record<string, string> = {
      checkup: "Routine Check-up",
      cleaning: "Professional Cleaning",
      whitening: "Teeth Whitening",
      cosmetic: "Cosmetic Dentistry",
      orthodontics: "Orthodontics",
      emergency: "Emergency Care",
      other: "Other",
    };

    const serviceLabel = service ? (serviceLabels[service] || service) : "Not specified";

    const emailHtml = `
      <h2>New Contact Form Enquiry</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service of Interest:</strong> ${serviceLabel}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p style="color:#888;font-size:12px;">Submitted from the Acorn Dentistry Southport website at ${new Date().toISOString()}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Acorn Dentistry Website <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `New Contact Form Enquiry from ${name}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", res.status, errText);
      return new Response(
        JSON.stringify({ error: `Email sending failed: ${res.status}` }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Failed to submit form" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
