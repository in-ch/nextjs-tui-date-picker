'use client';

import { TuiTimeTabPicker } from 'nextjs-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiTimeTabPicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
