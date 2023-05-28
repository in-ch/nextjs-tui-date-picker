'use client';

import { TuiTimeTabPicker } from 'react-tui-date-picker';

export default function Page() {
  return (
    <>
      <TuiTimeTabPicker handleChange={() => console.log('Hello world!')} />
    </>
  );
}
