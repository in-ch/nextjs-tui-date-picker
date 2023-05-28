'use client';

import { TuiDateInlinePicker } from 'react-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiDateInlinePicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
