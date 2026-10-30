import Link from "next/link";
import { ITEMS } from "../data";

export const dynamic = "force-dynamic";

export default async function Item({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = ITEMS.find((i) => i.id === Number(id));
  return (
    <>
      <p><Link href="/items">← Items</Link></p>
      <h1>{item?.name ?? "Not found"}</h1>
      <p>Now press the browser&apos;s Back button. It should return to Items.</p>
    </>
  );
}
