import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { MailtrapTransport } from 'mailtrap';

type EmailPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  if (!name || !email || !message) {
    return new NextResponse(
      JSON.stringify({ error: 'Please fill all the fields' }),
      { status: 400 },
    );
  }

  try {
    await sendEmail({ name, email, message });
    return new NextResponse(JSON.stringify({ message: 'Email sent' }));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}

async function sendEmail({ name, email, message }: EmailPayload) {
  let transporter = nodemailer.createTransport(
    MailtrapTransport({
      token: `${process.env.TOKEN_MAILTRAP}`,
    }),
  );

  await transporter.sendMail({
    from: `"Website Contact Form" <mailtrap@demomailtrap.com>`,
    to: process.env.EMAIL,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  });
}
