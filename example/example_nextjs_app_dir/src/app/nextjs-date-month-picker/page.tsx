'use client';

import { TuiMonthPicker } from 'nextjs-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiMonthPicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
