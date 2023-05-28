'use client';

import { TuiDatePicker } from 'react-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiDatePicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
