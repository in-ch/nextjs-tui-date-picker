'use client';

import { TuiDatePicker } from 'nextjs-tui-date-picker';
import { useState } from 'react';

function getFirstDayOfMonth(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();

  return `${year}-${(month + 1).toString().padStart(2, '0')}-01`;
}

function getLastDayOfMonth(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();

  const lastDay = new Date(year, month + 1, 0);
  const lastDayOfMonth = lastDay.getDate();

  return `${year}-${(month + 1).toString().padStart(2, '0')}-${lastDayOfMonth
    .toString()
    .padStart(2, '0')}`;
}

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
