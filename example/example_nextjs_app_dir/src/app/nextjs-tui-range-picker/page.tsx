'use client';

import { TuiDateRangePicker } from 'nextjs-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiDateRangePicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
