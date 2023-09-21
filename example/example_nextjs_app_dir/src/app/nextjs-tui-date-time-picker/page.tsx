'use client';

import { TuiDateTimePicker } from 'nextjs-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiDateTimePicker
        handleChange={() => console.log('Hello world!')}
        date={new Date('2023-01-01')}
        inputWidth={140}
        fontSize={16}
      />
    </>
  );
}
