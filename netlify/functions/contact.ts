import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

// Pull credentials (defaulting to the specified credentials)
const GMAIL_USER = process.env.GMAIL_USER || 'vikrantwebadroit@gmail.com';
const GMAIL_PASS = process.env.GMAIL_PASS || 'lkxdndoslxqekfuo';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'vikrantwebadroit@gmail.com';

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTION',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Request body is empty' }),
      };
    }

    const { name, email, phone, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          success: false,
          error: 'Name, email, and message are required fields.',
        }),
      };
    }

    // SMTP Configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    const mailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
            border: 1px solid #e2e8f0;
          }
          .header {
            background: linear-gradient(135deg, #30C3F2 0%, #1E73BE 100%);
            color: #ffffff;
            padding: 30px 24px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 800;
            letter-spacing: 0.5px;
          }
          .header p {
            margin: 5px 0 0;
            font-size: 14px;
            opacity: 0.9;
          }
          .content {
            padding: 30px 24px;
          }
          .field-group {
            margin-bottom: 20px;
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 12px;
          }
          .field-group:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
          }
          .label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #64748b;
            font-weight: 700;
            margin-bottom: 4px;
          }
          .value {
            font-size: 15px;
            font-weight: 500;
            color: #0f172a;
          }
          .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #1E73BE;
            padding: 15px;
            border-radius: 8px;
            font-style: italic;
            white-space: pre-wrap;
            color: #334155;
            margin-top: 8px;
          }
          .footer {
            background-color: #f1f5f9;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Lead Inquiry</h1>
            <p>Trafovolt Research and Development Centre</p>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="label">Full Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #1E73BE; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field-group">
              <div class="label">Phone Number</div>
              <div class="value">${phone || 'Not Provided'}</div>
            </div>
            <div class="field-group">
              <div class="label">Inquiry Message</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            This message was generated dynamically from the Netlify Serverless Contact Form.
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${name}" <${GMAIL_USER}>`,
      replyTo: email,
      to: RECIPIENT_EMAIL,
      cc: 'trafovolt@gmail.com',
      subject: `[Trafovolt Inquiry] New Message from ${name}`,
      text: `Inquiry from: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: mailHTML,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ success: true }),
    };
  } catch (error: any) {
    console.error('SMTP Error during serverless transport:', error);
    let errorMessage = error.message || 'Unknown SMTP error occurred.';
    let fixHint = '';

    if (error.code === 'EAUTH' || errorMessage.includes('Username and Password not accepted')) {
      fixHint = 'Google GMail SMTP requires an "App Password" to authenticate if Multi-Factor Authentication is enabled. Please generate a custom 16-character app password and configure it as GMAIL_PASS.';
    }

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: false,
        error: errorMessage,
        fixHint: fixHint || undefined,
      }),
    };
  }
};
