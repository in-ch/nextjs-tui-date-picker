'use client';

import { TuiTimePicker } from 'nextjs-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiTimePicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
