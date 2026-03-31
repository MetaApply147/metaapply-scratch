"use client";

import { useEffect, useState } from "react";
import { locationAPI } from "@/lib/api";
import { Country } from "@/types/location";

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);

  useEffect(() => {
    locationAPI
      .getCountries()
      .then(setCountries)
      .catch(() => setError("Failed to load countries"))
      .finally(() => setLoading(false));
  }, []);

  return { countries, loading, error };
}