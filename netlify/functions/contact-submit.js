const SUPABASE_URL = 'https://qrqnxnfldvvtodxtntdo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFycW54bmZsZHZ2dG9keHRudGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4ODk1MjMsImV4cCI6MjEwNDQ2NTUyM30.GkMxo6AtSnILUXBgE_jpIhU1Iio9RFUJt3i-bGellJA';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const RECIPIENT_EMAIL = 'acorndentist@gmail.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const serviceLabels = {
  checkup: 'Routine Check-up',
  cleaning: 'Professional Cleaning',
  whitening: 'Teeth Whitening',
  cosmetic: 'Cosmetic Dentistry',
  orthodontics: 'Orthodontics',
  emergency: 'Emergency Care',
  other: 'Other',
};

export default async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const submission = {
      name,
      email,
      phone: phone || null,
      service: service || null,
      message,
    };

    // Save to database using service role key (bypasses RLS)
    const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(submission),
    });

    if (!dbRes.ok) {
      const errText = await dbRes.text();
      console.error('Database insert failed:', dbRes.status, errText);
      return new Response(JSON.stringify({ error: 'Failed to save your message' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Send email via Resend
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY env var is not set on Netlify');
    } else {
      const serviceLabel = service ? (serviceLabels[service] || service) : 'Not specified';

      const emailHtml = `
        <h2>New Contact Form Enquiry</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service of Interest:</strong> ${serviceLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color:#888;font-size:12px;">Submitted from the Acorn Dentistry Southport website at ${new Date().toISOString()}</p>
      `;

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Acorn Dentistry Website <onboarding@resend.dev>',
          to: [RECIPIENT_EMAIL],
          reply_to: email,
          subject: `New Contact Form Enquiry from ${name}`,
          html: emailHtml,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error('Resend API error:', resendRes.status, errText);
      } else {
        const resendData = await resendRes.json();
        console.log('Resend success, email id:', resendData.id);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact submit error:', err);
    return new Response(JSON.stringify({ error: 'Failed to submit form' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
};
