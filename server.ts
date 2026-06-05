import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Gmail configuration (uses environment variables, falling back to user-supplied credentials)
const GMAIL_USER = process.env.GMAIL_USER || 'vikrantwebadroit@gmail.com';
const GMAIL_PASS = process.env.GMAIL_PASS || 'vikrant@123';

// Recipient email (can be custom, falls back to GMAIL_USER)
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'vikrantwebadroit@gmail.com';

// API endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', server: 'Trafovolt Custom Express Server' });
});

// Contact us SMTP routing
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required fields.',
    });
  }

  try {
    // Create direct Gmail SMTP transporter
    // We use secure: true with port 465 (or service: 'gmail')
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    // Elegant and professional HTML Email template
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
            This message was generated dynamically from the Trafovolt Contact Form.
          </div>
        </div>
      </body>
      </html>
    `;

    // Mail configurations
    const mailOptions = {
      from: `"${name}" <${GMAIL_USER}>`,
      replyTo: email,
      to: RECIPIENT_EMAIL,
      cc: 'trafovolt@gmail.com', // Always notify both systems for comprehensive lead acquisition
      subject: `[Trafovolt Inquiry] New Message from ${name}`,
      text: `Inquiry from: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: mailHTML,
    };

    // Attempt to deliver SMTP mail
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully via Gmail SMTP server from ${email} to ${RECIPIENT_EMAIL}`);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('SMTP Error during email transport:', error);

    // Provide helpful assistance if Gmail returns 2FA App Password block
    let errorMessage = error.message || 'Unknown SMTP error occurred.';
    let fixHint = '';

    if (error.code === 'EAUTH' || errorMessage.includes('Username and Password not accepted')) {
      fixHint = 'Google GMail SMTP requires an "App Password" to authenticate if Multi-Factor Authentication is enabled. Please navigate to https://myaccount.google.com/apppasswords and generate a custom 16-character app password to put in GMAIL_PASS.';
    }

    return res.status(500).json({
      success: false,
      error: errorMessage,
      fixHint: fixHint || undefined,
    });
  }
});

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: 'Name and email are required fields.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    const subscriberHTML = `
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
            background: linear-gradient(135deg, #1E73BE 0%, #0f172a 100%);
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
            <h1>New Bulletin Subscriber</h1>
            <p>Trafovolt Research and Development Centre</p>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="label">Subscriber Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #1E73BE; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field-group">
              <div class="label">Subscription Status</div>
              <div class="value" style="color: #10b981; font-weight: 700;">ACTIVE</div>
            </div>
          </div>
          <div class="footer">
            This subscription was submitted dynamically from the Trafovolt Bulletin signup modal.
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${name}" <${GMAIL_USER}>`,
      replyTo: email,
      to: RECIPIENT_EMAIL,
      cc: 'trafovolt@gmail.com', // Always notify both systems for comprehensive lead acquisition
      subject: `[Trafovolt Newsletter] New Subscriber: ${name}`,
      text: `New subscriber logged!\nName: ${name}\nEmail: ${email}\nStatus: Active`,
      html: subscriberHTML,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Newsletter subscription email sent successfully from ${email} to ${RECIPIENT_EMAIL}`);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('SMTP Error during newsletter subscription email transport:', error);
    let errorMessage = error.message || 'Unknown SMTP error occurred.';
    let fixHint = '';

    if (error.code === 'EAUTH' || errorMessage.includes('Username and Password not accepted')) {
      fixHint = 'Google GMail SMTP requires an "App Password" to authenticate if Multi-Factor Authentication is enabled. Please navigate to https://myaccount.google.com/apppasswords and generate a custom 16-character app password to put in GMAIL_PASS.';
    }

    return res.status(500).json({
      success: false,
      error: errorMessage,
      fixHint: fixHint || undefined,
    });
  }
});

// Setup development or production build system
const startServer = async () => {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[FULL-STACK] Express server live at http://0.0.0.0:${PORT}`);
  });
};

startServer();
