"use client";

import { useFormState, useFormStatus } from "react-dom";

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
        <div className="text-left">
          <Button type="submit" submittingText="Sending message...">
            Send Message
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
