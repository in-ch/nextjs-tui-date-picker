'use client';

import { TuiDateRangePicker, TuiDatePicker } from 'react-tui-date-picker';

export default function Home() {
  return (
    <>
      <TuiDateRangePicker handleChange={() => console.log('Hello world!')} />
      <TuiDatePicker />
    </>
  );
}
