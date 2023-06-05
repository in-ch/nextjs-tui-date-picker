'use client';

import { TuiYearPicker } from 'nextjs-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiYearPicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
