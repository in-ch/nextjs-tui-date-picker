'use client';

import { TuiMonthPicker } from 'react-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiMonthPicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
