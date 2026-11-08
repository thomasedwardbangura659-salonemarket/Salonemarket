"use client";

import { useState, type FormEvent, type HTMLInputTypeAttribute } from "react";

type AuthFormProps = {
  mode: "login" | "register";
};

type FieldProps = {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  autoComplete: string;
};

function Field({ label, name, type, autoComplete }: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="mt-1.5 w-full rounded-lg border border-border bg-gray-50 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [message, setMessage] = useState<string | null>(null);
  const isLogin = mode === "login";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Demo only — accounts and sign-in are not connected to a backend yet."
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {!isLogin ? (
        <Field
          label="Full name"
          name="name"
          type="text"
          autoComplete="name"
        />
      ) : null}
      <Field
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
      />
      <Field
        label="Password"
        name="password"
        type="password"
        autoComplete={isLogin ? "current-password" : "new-password"}
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        {isLogin ? "Sign in" : "Create account"}
      </button>
      {message ? (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-800">
          {message}
        </p>
      ) : null}
    </form>
  );
}
