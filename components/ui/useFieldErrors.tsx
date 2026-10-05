"use client";

import { useState, type CSSProperties, type FormEvent } from "react";

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/**
 * Inline, per-field validation on top of the browser's constraint checks (pattern, required,
 * min/max…): a field shows its message under itself once the user leaves it, or when a submit
 * is blocked, and the message clears as soon as the value becomes valid.
 */
export function useFieldErrors(messages: Record<string, string>) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function check(el: Field) {
    const message = el.validity.valid ? "" : messages[el.name] || el.validationMessage;
    setErrors((prev) => (prev[el.name] === message ? prev : { ...prev, [el.name]: message }));
  }

  /** Props to spread on an input/select/textarea. `filter` strips disallowed characters while typing. */
  function field(name: string, filter?: (value: string) => string) {
    return {
      name,
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
      onInput: (e: FormEvent<Field>) => {
        const el = e.currentTarget;
        if (filter) {
          const filtered = filter(el.value);
          if (filtered !== el.value) el.value = filtered;
        }
        // Re-check only once an error is showing, so we don't nag while the user is still typing.
        if (errors[name]) check(el);
      },
      onBlur: (e: FormEvent<Field>) => {
        if (e.currentTarget.value) check(e.currentTarget);
      },
      onInvalid: (e: FormEvent<Field>) => {
        e.preventDefault();
        check(e.currentTarget);
      },
    };
  }

  function errorFor(name: string) {
    return errors[name] ? (
      <p id={`${name}-error`} role="alert" style={errorStyle}>
        {errors[name]}
      </p>
    ) : null;
  }

  function borderFor(name: string): CSSProperties {
    return errors[name] ? { borderColor: "#e53e3e" } : {};
  }

  /** Call from onSubmit before sending: shows every field's error and focuses the first invalid one. */
  function validateAll(form: HTMLFormElement) {
    const fields = Array.from(form.elements).filter(
      (el): el is Field => "validity" in el && "name" in el && Boolean((el as Field).name),
    );
    fields.forEach(check);
    const firstInvalid = fields.find((el) => !el.validity.valid);
    firstInvalid?.focus();
    return !firstInvalid;
  }

  return { field, errorFor, borderFor, validateAll, reset: () => setErrors({}) };
}

const errorStyle: CSSProperties = {
  color: "#e53e3e",
  fontSize: "0.75rem",
  margin: "6px 0 0",
  whiteSpace: "pre-line",
};
