"use client";

import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  MenuItem,
  Button,
  CircularProgress,
  Alert,
  Box,
  Checkbox, 
  FormControlLabel,
  Typography
} from "@mui/material";
import { useCountries } from "@/hooks/useCountries";
import { useStates } from "@/hooks/useStates";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

export interface FormField {
  name: string;
  type: "text" | "email" | "phone" | "select" | "textarea" | "country" | "state" | "checkbox";
  lsKey: string;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  phonePrefix?: string;
  defaultChecked?: boolean;
  label?: string;
  sendToLSQ?: boolean;
}

export interface FormSchema {
  formId: string;
  submitLabel?: string;
  fields: FormField[];
  extraPayload?: Record<string, string>;
}

interface Props {
  schema: FormSchema;
  onSuccess?: () => void;
  Setwidth?: number;
}

type FieldWrapperProps = {
  name: string;
  children: ReactNode;
  error?: string;
};

const FieldWrapper = ({ name, children, error }: FieldWrapperProps) => {
  const hasError = !!error;

  return (
    <Box sx={{ position: "relative", pb: hasError ? "20px" : 0 }}>
      {children}

      {hasError && (
        <Box
          sx={{
            position: "absolute",
            top: "72%",
            left: 0,
            fontSize: 12,
            color: "error.main",
            lineHeight: "16px",
          }}
        >
          {error}
        </Box>
      )}
    </Box>
  );
};

export default function DynamicLeadForm({ schema, onSuccess, Setwidth }: Props) {
  const router = useRouter();

  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = { phoneCode: "91" };

    schema.fields.forEach((field) => {
      if (field.type === "checkbox") {
        initial[field.name] = field.defaultChecked ? "true" : "false";
      }
    });

    return initial;
  });
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted]     = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  const selectedCountryId = values["country"] ? Number(values["country"]) : null;

  const { countries, loading: countriesLoading } = useCountries();
  const { states,    loading: statesLoading    } = useStates(selectedCountryId);

  const selectedCountry = countries.find((c) => c.id === selectedCountryId);
  const selectedState   = states.find((s) => s.id === Number(values["state"]));

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

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

      // Checkbox validaion
      if (field.type === "checkbox") {
        if (field.required && values[field.name] !== "true") {
          errors[field.name] = "This field is required";
        }
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

    const attributes = [
      // ✅ Dynamic form fields
      ...schema.fields
        .filter((field) => field.sendToLSQ !== false)
        .map((field) => {
          let value = values[field.name] ?? "";

          if (field.type === "country" && selectedCountry)
            value = selectedCountry.country_name;

          if (field.type === "state" && selectedState)
            value = selectedState.state_name;

          if (field.type === "phone")
            value = `${code}-${values[field.name] ?? ""}`;

          return { Attribute: field.lsKey, Value: value };
        }),

      // ✅ Page URL (dynamic)
      {
        Attribute: "mx_Meta_Lead_Source_URL",
        Value: pageUrl,
      },

      // ✅ Extra payload (dynamic per page)
      ...(schema.extraPayload
        ? Object.entries(schema.extraPayload).map(([key, value]) => ({
            Attribute: key,
            Value: value,
          }))
        : []),
    ];

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

  // ✅ Common props generator
  const getCommonProps = (field: FormField) => {
    const id = `field-${field.name}`;

    return {
      id,
      name: field.name, // ✅ important for autofill
      fullWidth: true,
      required: field.required,
      label: field.placeholder?.replace("*", "").trim(),
      value: values[field.name] ?? "",
      onChange: (e: any) => handleChange(field.name, e.target.value),
      error: !!fieldErrors[field.name],
      size: "small" as const,

      sx: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          "& fieldset": {
            borderColor: "#D0D0D0",
          },
          "&:hover fieldset": {
            borderColor: "gray.500",
          },
          "&.Mui-focused fieldset": {
            borderColor: "gray.500",
            borderWidth: "1.5px",
            color: "gray.500",
          },
        },
        "& .MuiInputBase-input": {
          fontSize: "14px",
          fontFamily: "var(--font-body)",
          color: 'gray.800',
          padding: '10px 16px',
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
          fontFamily: "var(--font-body)",
          color: 'gray.600',
        },
      },
    };
  };

  // ✅ Reusable Select Field
  const renderSelect = (
  field: FormField,
  options: { label: string; value: any }[],
  disabled?: boolean,
  placeholder?: string
) => {
  const commonProps = getCommonProps(field); // ✅ store once

  return (
    <FieldWrapper
      key={field.name}
      name={field.name}
      error={fieldErrors[field.name]}
    >
      <TextField
        {...commonProps}
        select
        disabled={disabled}
        sx={{
          ...commonProps.sx,

          "& .MuiOutlinedInput-root": {
            ...commonProps.sx?.["& .MuiOutlinedInput-root"], 
            height: "40.13px",
            display: "flex",
            alignItems: "center",
          },

          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            padding: "10px 12px",
          },
        }}
        slotProps={{
          select: {
            MenuProps: {
              PaperProps: { sx: { maxHeight: 250, borderRadius: 2 } },
            },
          },
        }}
      >
        <MenuItem value="" disabled>
          {placeholder || field.placeholder}
        </MenuItem>

        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </TextField>
    </FieldWrapper>
  );
};

  const wrap = (field: FormField, child: ReactNode) => (
    <FieldWrapper
      key={field.name}
      name={field.name}
      error={fieldErrors[field.name]}
    >
      {child}
    </FieldWrapper>
  );

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <Box sx={{
      boxShadow: '0px 20px 38px 0px #9C9C9C80',
      borderRadius: 4,
      backgroundColor: 'common.white',
      px: 4,
      pt: 3,
      pb: 4,
      width: Setwidth,
    }}>
      <Typography variant="heading11" component='h5' sx={{textAlign: 'center', mb: 3.5}}>Enquire Now</Typography>
    
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {schema.fields.map((field) => {
          if (field.type === "checkbox") return null;

          // COUNTRY
          if (field.type === "country") {
            return renderSelect(
              field,
              countries.map((c) => ({ label: c.country_name, value: c.id })),
              countriesLoading,
              countriesLoading ? "Loading countries..." : field.placeholder
            );
          }

          // STATE
          if (field.type === "state") {
            return renderSelect(
              field,
              states.map((s) => ({ label: s.state_name, value: s.id })),
              !selectedCountryId || statesLoading,
              statesLoading
                ? "Loading states..."
                : !selectedCountryId
                ? "Select Country first"
                : field.placeholder
            );
          }

          // PHONE
          if (field.type === "phone") {
            return wrap(
              field,
              <Box sx={{ display: "flex", gap: 0 }}>
                <TextField
                  select
                  value={values["phoneCode"] ?? "91"}
                  onChange={(e) => handleChange("phoneCode", e.target.value)}
                  size="small"
                  sx={{ width: '100px',
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px 0 0 8px",
                      "& fieldset": {
                        borderColor: "#D0D0D0",
                        borderRight: 'none',
                      },
                      "&:hover fieldset": {
                        borderColor: "gray.500",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "gray.500",
                        borderWidth: "1.5px",
                      },
                    },
                    '& .MuiInputBase-input': {
                        fontSize: '14px',
                        fontFamily: 'var(--font-body)',
                        color: 'gray.800',
                        p: '10px',
                      },
                   }}
                  slotProps={{ select: { native: true } }}
                >
                  {countries.map((c) => (
                    <option key={c.id} value={c.phone_code}>
                      +{c.phone_code}
                    </option>
                  ))}
                </TextField>

                <TextField
                  {...getCommonProps(field)}
                  id={`field-${field.name}`}
                  name={field.name}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    if (val.length <= 12) handleChange(field.name, val);
                  }}
                  sx={{
                    ...getCommonProps(field).sx,  
                    "& .MuiOutlinedInput-root": {
                      ...getCommonProps(field).sx["& .MuiOutlinedInput-root"], 
                      borderRadius: "0 8px 8px 0",
                    },
                   }}
                  inputProps={{ inputMode: "numeric", maxLength: 12 }}
                />
              </Box>
            );
          }

          // SELECT
          if (field.type === "select") {
            return renderSelect(field, field.options || []);
          }

          // TEXTAREA
          if (field.type === "textarea") {
            return wrap(
              field,
              <TextField {...getCommonProps(field)} multiline minRows={3} />
            );
          }

          // TEXT / EMAIL (default)
          return wrap(
            field,
            <TextField {...getCommonProps(field)} type={field.type}/>
          );
        })}

        {schema.fields.map((field) => {
          if (field.type !== "checkbox") return null;

          return (
            <Box key={field.name} sx={{ position: "relative" }}>
              <FormControlLabel
                sx={{ ml: 0 }}
                control={
                  <Checkbox
                    id={`field-${field.name}`}
                    name={field.name}
                    checked={values[field.name] === "true"}
                    onChange={(e) =>
                      handleChange(field.name, String(e.target.checked))
                    }
                    size="small"
                    sx={{ height: 18, width: 18, p: 0, mr: 1, mb: 'auto', color: '#C2C2C2'  }}
                  />
                }
                label={
                  <Typography variant="body07" sx={{color: '#595959'}}>
                    {field.name === "terms" ? (
                      <>
                        I have read and agreed to{" "}
                        <MuiLink
                          component={NextLink}
                          href="/terms-and-conditions"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: "primary.main", fontWeight: 600, textDecoration: 'none' }}
                        >
                          Terms and Conditions
                        </MuiLink>
                      </>
                    ) : (
                      field.label
                    )}
                  </Typography>
                }
              />

              {fieldErrors[field.name] && (
                <Box sx={{ color: "error.main", fontSize: 12 }}>
                  {fieldErrors[field.name]}
                </Box>
              )}
            </Box>
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
        >
          {loading ? (
            <CircularProgress size={22} sx={{ color: "white" }} />
          ) : (
            schema.submitLabel ?? "Submit"
          )}
        </Button>
      </Box>
    </Box>
  );
}
