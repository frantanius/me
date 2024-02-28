import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['frantaniussinulingga@gmail.com'],
      subject: 'Hello from contact',
      text: `a messages from: ${name}, ${email} ${message}, `,
    });

    return NextResponse.json({ message: 'Email sent', data });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
