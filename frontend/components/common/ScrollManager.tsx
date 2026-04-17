"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Disable browser restoring previous scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname, searchParams]);

  return null;
}