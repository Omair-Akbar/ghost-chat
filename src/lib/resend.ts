import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);
