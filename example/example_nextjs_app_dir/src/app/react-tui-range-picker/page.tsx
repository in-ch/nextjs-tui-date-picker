'use client';

import { TuiDateRangePicker } from 'react-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiDateRangePicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
