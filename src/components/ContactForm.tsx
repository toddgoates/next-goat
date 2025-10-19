"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import { Turnstile } from "next-turnstile";

import Alert from "./Alert";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";
import InputError from "./InputError";
import { sendMessage } from "@/lib/actions";

export default function ContactForm() {
  const [state, formAction] = useFormState(sendMessage, null);
  const { pending } = useFormStatus();
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [error, setError] = useState<string | null>(null);

  return state?.message ? (
    <Alert type="success">
      <h3 className="mb-4 text-2xl font-bold">Success!</h3>
      <p className="text-lg">{state.message}</p>
    </Alert>
  ) : (
    <form action={formAction}>
      <fieldset className="flex flex-col gap-4" disabled={pending}>
        <div className="sm:flex sm:gap-8">
          <div className="w-full">
            <Label htmlFor="name">What's your name?</Label>
            <Input name="name" required />
            {state?.error?.name ? (
              <InputError message={state.error.name} />
            ) : (
              <p>&nbsp;</p>
            )}
          </div>
          <div className="w-full">
            <Label htmlFor="email">What's your email?</Label>
            <Input type="email" name="email" required />
            {state?.error?.email ? (
              <InputError message={state.error.email} />
            ) : (
              <p>&nbsp;</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="honey">
            What's your phone number?
          </label>
          <Input type="tel" name="phone" inputClass="honey" tabIndex={-1} />
        </div>
        <div>
          <Label htmlFor="message">What would you like to say?</Label>
          <Textarea name="message" required></Textarea>
          {state?.error?.message ? (
            <InputError message={state.error.message} />
          ) : (
            <p>&nbsp;</p>
          )}
        </div>
        <div className="max-w-80 items-start">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            retry="auto"
            refreshExpired="auto"
            sandbox={process.env.NODE_ENV === "development"}
            onError={() => {
              setTurnstileStatus("error");
              setError("Security check failed. Please try again.");
            }}
            onExpire={() => {
              setTurnstileStatus("expired");
              setError("Security check expired. Please verify again.");
            }}
            onLoad={() => {
              setTurnstileStatus("required");
              setError(null);
            }}
            onVerify={(token) => {
              setTurnstileStatus("success");
              setError(null);
            }}
          />
        </div>
        <div>{error && <InputError message={error} />}</div>
        <div className="text-left">
          <Button type="submit" submittingText="Sending message...">
            Send Message
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
