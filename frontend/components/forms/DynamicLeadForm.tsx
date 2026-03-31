"use client";

import { useState } from "react";
import { useCountries } from "@/hooks/useCountries";
import { useStates } from "@/hooks/useStates";

export interface FormField {
  name: string;
  type: "text" | "email" | "phone" | "select" | "textarea" | "country" | "state";
  lsKey: string;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  phonePrefix?: string;
}

export interface FormSchema {
  formId: string;
  submitLabel?: string;
  fields: FormField[];
}

interface Props {
  schema: FormSchema;
  onSuccess?: () => void;
}

export default function DynamicLeadForm({ schema, onSuccess }: Props) {
  const [values, setValues]       = useState<Record<string, string>>({});
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedCountryId = values["country"] ? Number(values["country"]) : null;

  const { countries, loading: countriesLoading } = useCountries();
  const { states,    loading: statesLoading    } = useStates(selectedCountryId);

  const handleChange = (name: string, value: string) => {
    setValues((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "country") updated["state"] = "";
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const selectedCountry = countries.find((c) => c.id === selectedCountryId);
    const selectedState   = states.find((s) => s.id === Number(values["state"]));

    const attributes = schema.fields.map((field) => {
      let value = values[field.name] ?? "";
      if (field.type === "country" && selectedCountry)
        value = selectedCountry.country_name;
      if (field.type === "state" && selectedState)
        value = selectedState.state_name;
      return { Attribute: field.lsKey, Value: value };
    });

    try {
      const res = await fetch("/api/leads", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ attributes }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      onSuccess?.();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-green-600 font-medium text-center">
        Thank you! We'll be in touch shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {schema.fields.map((field) => {

        // COUNTRY dropdown
        if (field.type === "country") {
          return (
            <select
              key={field.name}
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="border rounded px-4 py-3 w-full"
            >
              <option value="" disabled>
                {countriesLoading ? "Loading countries..." : field.placeholder}
              </option>
              {countries.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.country_name}
                </option>
              ))}
            </select>
          );
        }

        // STATE dropdown
        if (field.type === "state") {
          return (
            <select
              key={field.name}
              required={field.required}
              value={values[field.name] ?? ""}
              disabled={!selectedCountryId}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="border rounded px-4 py-3 w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="" disabled>
                {statesLoading
                  ? "Loading states..."
                  : !selectedCountryId
                  ? "Select Country first"
                  : field.placeholder}
              </option>
              {states.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.state_name}
                </option>
              ))}
            </select>
          );
        }

        // PHONE field
        if (field.type === "phone") {
          return (
            <div key={field.name} className="flex gap-2">
              <span className="border rounded px-3 py-3 bg-gray-100 text-sm">
                {field.phonePrefix ?? "+91"}
              </span>
              <input
                type="tel"
                required={field.required}
                placeholder={field.placeholder}
                value={values[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="border rounded px-4 py-3 flex-1"
              />
            </div>
          );
        }

        // STATIC SELECT
        if (field.type === "select") {
          return (
            <select
              key={field.name}
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="border rounded px-4 py-3 w-full"
            >
              <option value="" disabled>{field.placeholder}</option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          );
        }

        // TEXTAREA
        if (field.type === "textarea") {
          return (
            <textarea
              key={field.name}
              required={field.required}
              placeholder={field.placeholder}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="border rounded px-4 py-3 w-full min-h-[100px]"
            />
          );
        }

        // TEXT / EMAIL / DATE
        return (
          <input
            key={field.name}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
            value={values[field.name] ?? ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className="border rounded px-4 py-3 w-full"
          />
        );
      })}

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-full transition disabled:opacity-70"
      >
        {loading ? "Submitting..." : schema.submitLabel ?? "Submit"}
      </button>
    </form>
  );
}