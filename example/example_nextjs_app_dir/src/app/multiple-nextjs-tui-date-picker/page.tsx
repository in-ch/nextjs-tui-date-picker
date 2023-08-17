'use client';

import {
  getFirstDayOfMonth,
  getLastDayOfMonth,
  TuiDatePicker,
} from 'nextjs-tui-date-picker';
import { useState } from 'react';

export default function Page() {
  const [firstDate, setFirstDate] = useState(new Date());
  const [secondDate, setSecondDate] = useState(new Date());

  const handleFirstDateChange = (value: string) => {
    setFirstDate(new Date(value));
    setSecondDate(new Date(getLastDayOfMonth(value)));
  };

  const handleSecondDateChange = (value: string) => {
    setFirstDate(new Date(getFirstDayOfMonth(value)));
    setSecondDate(new Date(value));
  };

  return (
    <>
      <TuiDatePicker
        handleChange={handleFirstDateChange}
        date={firstDate}
        inputWidth={140}
        fontSize={16}
      />
      <TuiDatePicker
        handleChange={handleSecondDateChange}
        date={secondDate}
        inputWidth={140}
        fontSize={16}
      />
    </>
  );
}
