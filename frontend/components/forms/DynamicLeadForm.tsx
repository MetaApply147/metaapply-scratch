"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  MenuItem,
  Button,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
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
  const router = useRouter();

  const [values, setValues]           = useState<Record<string, string>>({ phoneCode: "91" });
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted]     = useState(false);

  const selectedCountryId = values["country"] ? Number(values["country"]) : null;

  const { countries, loading: countriesLoading } = useCountries();
  const { states,    loading: statesLoading    } = useStates(selectedCountryId);

  const selectedCountry = countries.find((c) => c.id === selectedCountryId);
  const selectedState   = states.find((s) => s.id === Number(values["state"]));

  // ── Handle Change ──────────────────────────────────────────────────────────

  const handleChange = (name: string, value: string) => {
    setValues((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "country") {
        updated["state"] = "";
        const country = countries.find((c) => c.id === Number(value));
        if (country) updated["phoneCode"] = String(country.phone_code);
      }
      return updated;
    });

    // Clear field error on change without causing infinite loop
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  };

  // ── Validation ─────────────────────────────────────────────────────────────

  const validate = (): Record<string, string> => {
    const errors: Record<string, string> = {};

    schema.fields.forEach((field) => {
      // ✅ Always coerce to string before trim — fixes "trim is not a function"
      // because country/state store numeric IDs not strings
      const value = String(values[field.name] ?? "").trim();
      const label = field.placeholder?.replace("*", "").trim() ?? field.name;

      // Required check
      if (field.required && !value) {
        errors[field.name] = `${label} is required`;
        return;
      }

      if (!value) return;

      // Email validation
      if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          errors[field.name] = "Enter a valid email address";
      }

      // Phone validation — digits only, 7–12 digits
      if (field.type === "phone") {
        const digits = value.replace(/\D/g, "");
        if (digits.length < 7)
          errors[field.name] = "Phone number must be at least 7 digits";
        else if (digits.length > 12)
          errors[field.name] = "Phone number must not exceed 12 digits";
      }

      // Name validation
      if (field.type === "text" && field.name === "fullName") {
        if (value.length < 2)
          errors[field.name] = "Name must be at least 2 characters";
        else if (!/^[a-zA-Z\s'-]+$/.test(value))
          errors[field.name] = "Name can only contain letters, spaces, hyphens and apostrophes";
      }
    });

    return errors;
  };

  // ── Submit ─────────────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Run validations — show field errors and stop
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setLoading(true);

    const code = values["phoneCode"] ? `+${values["phoneCode"]}` : "+91";

    const attributes = schema.fields.map((field) => {
      let value = values[field.name] ?? "";
      if (field.type === "country" && selectedCountry)
        value = selectedCountry.country_name;
      if (field.type === "state" && selectedState)
        value = selectedState.state_name;
      if (field.type === "phone")
        value = `${code}-${values[field.name] ?? ""}`;
      return { Attribute: field.lsKey, Value: value };
    });

    try {
      const res = await fetch("/api/leads", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ attributes }),
      });

      const data = await res.json();

      if (!res.ok) {
        // ✅ Shows actual LSQ error e.g. "Lead with same email already exists"
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      onSuccess?.();
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Submitted fallback ─────────────────────────────────────────────────────

  if (submitted) {
    return (
      <Alert severity="success" sx={{ textAlign: "center" }}>
        Thank you! We'll be in touch shortly.
      </Alert>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      {schema.fields.map((field) => {

        // ── COUNTRY dropdown ──────────────────────────────────────────────
        if (field.type === "country") {
          return (
            <TextField
              key={field.name}
              select
              fullWidth
              required={field.required}
              label={field.placeholder?.replace("*", "").trim()}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              error={!!fieldErrors[field.name]}
              helperText={fieldErrors[field.name]}
              disabled={countriesLoading}
              size="small"
            >
              <MenuItem value="" disabled>
                {countriesLoading ? "Loading countries..." : field.placeholder}
              </MenuItem>
              {countries.map((c) => (
                <MenuItem key={c.id} value={c.id}>
                  {c.country_name}
                </MenuItem>
              ))}
            </TextField>
          );
        }

        // ── STATE dropdown ────────────────────────────────────────────────
        if (field.type === "state") {
          return (
            <TextField
              key={field.name}
              select
              fullWidth
              required={field.required}
              label={field.placeholder?.replace("*", "").trim()}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              error={!!fieldErrors[field.name]}
              helperText={fieldErrors[field.name]}
              disabled={!selectedCountryId || statesLoading}
              size="small"
            >
              <MenuItem value="" disabled>
                {statesLoading
                  ? "Loading states..."
                  : !selectedCountryId
                  ? "Select Country first"
                  : field.placeholder}
              </MenuItem>
              {states.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.state_name}
                </MenuItem>
              ))}
            </TextField>
          );
        }

        // ── PHONE field ───────────────────────────────────────────────────
        if (field.type === "phone") {
          return (
            <Box key={field.name} sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                {/* Country code dropdown — native select for compact +91 display */}
                <TextField
                  select
                  value={values["phoneCode"] ?? "91"}
                  onChange={(e) => handleChange("phoneCode", e.target.value)}
                  size="small"
                  sx={{ width: 100 }}
                  SelectProps={{ native: true }}
                >
                  {countries.map((c) => (
                    <option key={c.id} value={c.phone_code}>
                      +{c.phone_code}
                    </option>
                  ))}
                </TextField>

                {/* Phone number — numeric only, 7–12 digits */}
                <TextField
                  fullWidth
                  required={field.required}
                  label={field.placeholder?.replace("*", "").trim()}
                  value={values[field.name] ?? ""}
                  onChange={(e) => {
                    // Strip non-numeric — alphabets never appear in field
                    const numericOnly = e.target.value.replace(/\D/g, "");
                    if (numericOnly.length <= 12)
                      handleChange(field.name, numericOnly);
                  }}
                  inputProps={{
                    inputMode: "numeric",
                    maxLength: 12,
                  }}
                  error={!!fieldErrors[field.name]}
                  helperText={fieldErrors[field.name]}
                  size="small"
                />
              </Box>
            </Box>
          );
        }

        // ── STATIC SELECT ─────────────────────────────────────────────────
        if (field.type === "select") {
          return (
            <TextField
              key={field.name}
              select
              fullWidth
              required={field.required}
              label={field.placeholder?.replace("*", "").trim()}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              error={!!fieldErrors[field.name]}
              helperText={fieldErrors[field.name]}
              size="small"
            >
              <MenuItem value="" disabled>{field.placeholder}</MenuItem>
              {field.options?.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>
          );
        }

        // ── TEXTAREA ──────────────────────────────────────────────────────
        if (field.type === "textarea") {
          return (
            <TextField
              key={field.name}
              fullWidth
              multiline
              minRows={3}
              required={field.required}
              label={field.placeholder?.replace("*", "").trim()}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              error={!!fieldErrors[field.name]}
              helperText={fieldErrors[field.name]}
              size="small"
            />
          );
        }

        // ── TEXT / EMAIL ──────────────────────────────────────────────────
        return (
          <TextField
            key={field.name}
            fullWidth
            type={field.type}
            required={field.required}
            label={field.placeholder?.replace("*", "").trim()}
            value={values[field.name] ?? ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            error={!!fieldErrors[field.name]}
            helperText={fieldErrors[field.name]}
            size="small"
          />
        );
      })}

      {/* LSQ / server error shown above submit button */}
      {error && (
        <Alert severity="error" sx={{ fontSize: "0.85rem" }}>
          {error}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        fullWidth
        sx={{
          bgcolor: "rgb(236, 72, 153)",
          borderRadius: "9999px",
          py: 1.5,
          fontWeight: 600,
          fontSize: "1rem",
          textTransform: "none",
          "&:hover": { bgcolor: "rgb(219, 39, 119)" },
          "&:disabled": { opacity: 0.7 },
        }}
      >
        {loading ? (
          <CircularProgress size={22} sx={{ color: "white" }} />
        ) : (
          schema.submitLabel ?? "Submit"
        )}
      </Button>
    </Box>
  );
}
