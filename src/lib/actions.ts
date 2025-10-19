"use server";

import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";

export async function sendMessage(prevState: any, formData: FormData) {
  // Get form values
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("phone") as string;

  // Check Turnstile token
  const token = formData.get("cf-turnstile-response") as string;

  const validationResponse = await validateTurnstileToken({
    token,
    secretKey: process.env.TURNSTILE_SECRET_KEY!,
    idempotencyKey: v4(),
    sandbox: process.env.NODE_ENV === "development",
  });

  if (!validationResponse.success) {
    return {
      error: {
        message: "Turnstile validation failed. Please try again.",
      },
    };
  }

  // Reset errors
  const errors = {
    name: "",
    email: "",
    message: "",
  };

  // Check honeypot
  if (honeypot) {
    return { message: "Thanks for submitting" };
  }

  // Validate name
  if (typeof name === "string" && name.length === 0) {
    errors.name = "Please enter your name";
  }

  if (typeof name === "string" && name.match(/https?:\/\//)) {
    errors.name =
      "Sorry, I'm not accepting names with links in them at this time";
  }

  // Validate email
  if (typeof email === "string") {
    if (email.length === 0) {
      errors.email = "Please enter your email";
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,13})+$/.test(email)) {
      errors.email = "Please enter a valid email";
    }
  }

  // Validate message
  if (typeof message === "string" && message.length < 2) {
    errors.message = "Please enter a message";
  }

  if (
    typeof message === "string" &&
    (message.match(/https?:\/\//) ||
      message.match(/www\./) ||
      message.match(/\.com/))
  ) {
    errors.message =
      "Sorry, I'm not accepting messages with links at this time";
  }

  if (typeof message === "string" && message.toLowerCase().includes("seo")) {
    errors.message = "Sorry, I'm not interested in SEO requests";
  }

  // Return errors, if any
  if (Object.values(errors).some((error) => error.length > 0)) {
    return { error: errors };
  }

  // Send the message via contact form API
  const body = JSON.stringify({
    name,
    email,
    phone: "", // Needed for existing API
    message,
  });

  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  };

  const response = await fetch("https://api.toddgoates.com/contact", config);
  const data = await response.json();
  console.log(data);

  return {
    message:
      "Your message has been sent successfully! I'll get in touch with you shortly.",
  };
}
