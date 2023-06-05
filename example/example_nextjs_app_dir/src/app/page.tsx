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
      <Link href="/nextjs-date-inline-picker">
        <p>nextjs-date-inline-picker</p>
      </Link>
      <Link href="/nextjs-date-month-picker">
        <p>nextjs-date-month-picker</p>
      </Link>
      <Link href="/nextjs-date-time-picker">
        <p>nextjs-date-time-picker</p>
      </Link>
      <Link href="/nextjs-date-time-tab-picker">
        <p>nextjs-date-time-tab-picker</p>
      </Link>
      <Link href="/nextjs-date-year-picker">
        <p>nextjs-date-year-picker</p>
      </Link>
    </>
  );
}
