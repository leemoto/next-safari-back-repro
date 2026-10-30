import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Open <Link href="/items">Items</Link>, type in the search, open an item, then press Back.</p>
    </>
  );
}
