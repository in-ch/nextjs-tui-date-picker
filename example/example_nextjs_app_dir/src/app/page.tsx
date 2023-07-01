'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/nextjs-tui-date-picker">
        <p>nextjs-tui-date-picker</p>
      </Link>
      <Link href="/nextjs-tui-range-picker">
        <p>nextjs-tui-range-picker</p>
      </Link>
    </>
  );
}
