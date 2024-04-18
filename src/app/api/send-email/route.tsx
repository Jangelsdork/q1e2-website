/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../components/emailTemplate';
import { FormInput } from '../../contact/page';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest): Promise<NextResponse<unknown>> {
const formData:FormInput = await req.json()
  try {
    const data = await resend.emails.send({
      from: 'Q1E2 <q1e2@wearee.nl>',
      to: ['jack@wearee.nl', 'jason@wearee.nl'],
      subject: 'Q1E2 website enquiry',
      react: EmailTemplate({ ...formData }),
      text: ''
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}