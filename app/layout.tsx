import Link from "next/link";
import { HistoryLength } from "./history-length";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", maxWidth: 560, margin: "40px auto", padding: "0 16px" }}>
        <nav style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <Link href="/">Home</Link>
          <Link href="/items">Items</Link>
        </nav>
        {children}
        <HistoryLength />
      </body>
    </html>
  );
}
