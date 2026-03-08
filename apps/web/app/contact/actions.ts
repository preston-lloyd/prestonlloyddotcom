"use server";

import { Resend } from "resend";

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name?.trim()) {
    fieldErrors.name = "Name is required";
  }
  
  if (!email?.trim()) {
    fieldErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address";
  }

  if (!message?.trim()) {
    fieldErrors.message = "Message is required";
  } else if (message.trim().length < 10) {
    fieldErrors.message = "Message must be at least 10 characters";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  const to = process.env.RESEND_TO;
  const from = process.env.RESEND_FROM;

  if (!process.env.RESEND_API_KEY || !to || !from) {
    console.error("Resend not configured: set RESEND_API_KEY, RESEND_FROM, and RESEND_TO");
    return { error: "Something went wrong. Please try again or email directly." };
  }

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Contact from ${name.trim()}`,
      text: message.trim(),
      html: `<p>From: ${name.trim()} &lt;${email}&gt;</p><pre>${message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: "Something went wrong. Please try again or email directly." };
    }

    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again or email directly." };
  }
}
