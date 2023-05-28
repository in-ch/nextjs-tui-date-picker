'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/react-tui-date-picker">
        <p>react-tui-date-picker</p>
      </Link>
      <Link href="/react-tui-range-picker">
        <p>react-tui-range-picker</p>
      </Link>
      <Link href="/react-date-inline-picker">
        <p>react-date-inline-picker</p>
      </Link>
      <Link href="/react-date-month-picker">
        <p>react-date-month-picker</p>
      </Link>
      <Link href="/react-date-time-picker">
        <p>react-date-time-picker</p>
      </Link>
      <Link href="/react-date-time-tab-picker">
        <p>react-date-time-tab-picker</p>
      </Link>
      <Link href="/react-date-year-picker">
        <p>react-date-year-picker</p>
      </Link>
    </>
  );
}
