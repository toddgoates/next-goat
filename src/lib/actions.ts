"use server";

export async function sendMessage(
  prevState: {
    error: {
      name: string;
      email: string;
      message: string;
    };
    message: string;
  },
  formData: FormData
) {
  // Get form values
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("phone") as string;

  // Check honeypot
  if (honeypot) {
    return { message: "Thanks for submitting" };
  }

  // Validate name
  if (typeof name === "string" && name.length === 0) {
    return {
      error: {
        name: "Please enter your name",
      },
    };
  }

  if (typeof name === "string" && name.match(/https?:\/\//)) {
    return {
      error: {
        name: "Sorry, I'm not accepting names with links in them at this time",
      },
    };
  }

  // Validate email
  if (typeof email === "string") {
    if (email.length === 0) {
      return { error: { email: "Please enter your email" } };
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,13})+$/.test(email)) {
      return { error: { email: "Please enter a valid email" } };
    }
  }

  // Validate message
  if (typeof message === "string" && message.length < 2) {
    return { error: { message: "Please enter a message" } };
  }

  if (
    typeof message === "string" &&
    (message.match(/https?:\/\//) ||
      message.match(/www\./) ||
      message.match(/\.com/))
  ) {
    return {
      error: {
        message: "Sorry, I'm not accepting messages with links at this time",
      },
    };
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
