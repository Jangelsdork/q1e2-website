/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';


import { EmailTemplate } from '../../components/emailTemplate';
import { FormInput } from '../../contact/page';

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest): Promise<NextResponse<unknown>> {
const formData:FormInput = await req.json()
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['j.hespe.mangelsdorf@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ ...formData }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}