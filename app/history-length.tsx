"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Shows history.length after each navigation, so a skipped or replaced entry is visible.
export function HistoryLength() {
  const pathname = usePathname();
  const [n, setN] = useState<number | null>(null);
  useEffect(() => setN(window.history.length), [pathname]);
  return <p style={{ marginTop: 32, color: "#888" }}>history.length {n ?? ""}</p>;
}
