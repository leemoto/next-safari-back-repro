"use client";
import Link from "next/link";
import { useState } from "react";
import { ITEMS } from "./data";

export default function Items() {
  const [q, setQ] = useState("");
  const shown = ITEMS.filter((i) => i.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <h1>Items</h1>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search items" style={{ fontSize: 16, padding: 8, width: "100%" }} />
      <ul>
        {shown.map((i) => (
          <li key={i.id} style={{ padding: "6px 0" }}>
            <Link href={`/items/${i.id}`}>{i.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
