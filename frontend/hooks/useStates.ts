"use client";

import { useEffect, useState } from "react";
import { locationAPI } from "@/lib/api";
import { State } from "@/types/location";

export function useStates(countryId: number | null) {
  const [states, setStates]   = useState<State[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    if (!countryId) {
      setStates([]);
      return;
    }

    setLoading(true);
    setError(null);

    locationAPI
      .getStates(countryId)
      .then(setStates)
      .catch(() => setError("Failed to load states"))
      .finally(() => setLoading(false));

  }, [countryId]);

  return { states, loading, error };
}