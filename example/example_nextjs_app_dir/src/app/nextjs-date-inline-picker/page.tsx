'use client';

import { TuiDateInlinePicker } from 'nextjs-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiDateInlinePicker
        handleChange={() => console.log('Hello world!')}
        inputWidth={100}
      />
    </>
  );
}
