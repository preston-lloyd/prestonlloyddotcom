"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

export default function ContactForm({
  submitAction,
}: {
  submitAction: (
    prevState: ContactFormState,
    formData: FormData
  ) => Promise<ContactFormState>;
}) {
  const [state, formAction] = useActionState(submitAction, {});

  if (state.success) {
    return (
      <div className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-8 text-center">
        <p className="text-lg text-stone-100 font-medium mb-2">
          Thanks for reaching out!
        </p>
        <p className="text-stone-400">
          I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <p className="text-red-400 text-sm">{state.error}</p>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-400 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 bg-stone-800/60 border border-stone-700 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition"
          placeholder="Your name"
        />
        {state.fieldErrors?.name && (
          <p className="mt-1 text-sm text-red-400">{state.fieldErrors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-400 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-stone-800/60 border border-stone-700 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition"
          placeholder="you@example.com"
        />
        {state.fieldErrors?.email && (
          <p className="mt-1 text-sm text-red-400">{state.fieldErrors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-stone-800/60 border border-stone-700 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition resize-none"
          placeholder="Tell me about your project or idea..."
        />
        {state.fieldErrors?.message && (
          <p className="mt-1 text-sm text-red-400">{state.fieldErrors.message}</p>
        )}
      </div>
      <button
          type="submit"
          className="inline-flex text-center uppercase font-medium tracking-widest px-4 py-2 bg-yellow-500/70 hover:bg-yellow-500 border border-yellow-500 text-white rounded-md transition"
        >
          Send Message
        </button>
    </form>
  );
}
