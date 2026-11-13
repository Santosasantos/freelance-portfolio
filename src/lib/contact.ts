// Shared rules for the contact form, used by the browser and the server.

export type ContactInput = {
  name: string;
  email: string;
  need: string;
  budget: string;
  deadline: string;
  website: string; // Hidden trap field: people leave it empty, spam bots fill it.
};

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

export const limits = { name: 100, email: 200, need: 4000, budget: 40, deadline: 100 };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(input: ContactInput): FieldErrors {
  const errors: FieldErrors = {};
  if (!input.name.trim()) errors.name = "Enter your name.";
  else if (input.name.length > limits.name) errors.name = "Use a shorter name.";

  if (!input.email.trim()) errors.email = "Enter your email address.";
  else if (!emailPattern.test(input.email.trim()) || input.email.length > limits.email)
    errors.email = "Enter an email address like name@example.com.";

  if (input.need.trim().length < 10) errors.need = "Tell me a little more about what you need (at least 10 characters).";
  else if (input.need.length > limits.need) errors.need = "Please keep the message under 4,000 characters.";

  if (input.budget.length > limits.budget) errors.budget = "Choose a budget from the list.";
  if (input.deadline.length > limits.deadline) errors.deadline = "Use a shorter deadline.";
  return errors;
}

export function readInput(data: unknown): ContactInput {
  const d = (data && typeof data === "object" ? data : {}) as Record<string, unknown>;
  const s = (k: string) => (typeof d[k] === "string" ? (d[k] as string) : "");
  return { name: s("name"), email: s("email"), need: s("need"), budget: s("budget"), deadline: s("deadline"), website: s("website") };
}
