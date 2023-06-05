'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/next-tui-date-picker">
        <p>next-tui-date-picker</p>
      </Link>
      <Link href="/next-tui-range-picker">
        <p>next-tui-range-picker</p>
      </Link>
      <Link href="/next-date-inline-picker">
        <p>next-date-inline-picker</p>
      </Link>
      <Link href="/next-date-month-picker">
        <p>next-date-month-picker</p>
      </Link>
      <Link href="/next-date-time-picker">
        <p>next-date-time-picker</p>
      </Link>
      <Link href="/next-date-time-tab-picker">
        <p>next-date-time-tab-picker</p>
      </Link>
      <Link href="/next-date-year-picker">
        <p>next-date-year-picker</p>
      </Link>
    </>
  );
}
