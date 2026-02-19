"use server";

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name?.trim()) fieldErrors.name = "Name is required";
  if (!email?.trim()) fieldErrors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address";
  }
  if (!message?.trim()) fieldErrors.message = "Message is required";
  else if (message.trim().length < 10) {
    fieldErrors.message = "Message must be at least 10 characters";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  try {
    // TODO: Add your email service here (e.g. Resend, Nodemailer, Formspree)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: '...', to: 'you@email.com', subject: `Contact from ${name}`, replyTo: email, text: message });
    console.log("Contact form submission:", { name, email, message });
    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again or email directly." };
  }
}
