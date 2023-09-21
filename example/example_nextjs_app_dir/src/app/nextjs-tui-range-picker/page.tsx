'use client';

import { TuiDateRangePicker } from 'nextjs-tui-date-range-picker';
import { useState } from 'react';

export default function Page() {
  const [startDate, setStartDate] = useState<Date>(new Date('2023-02-01'));
  const [endDate, setEndDate] = useState<Date>(new Date('2023-12-31'));

  const options = {
    language: 'en',
    usageStatistics: false,
    format: 'YYYY-MM-dd',
    selectableRangeStart: startDate,
    selectableRangeEnd: endDate,
  };

  const handleReset = () => {
    setStartDate(new Date('2023-02-01'));
    setEndDate(new Date('2023-12-31'));
  };

  return (
    <>
      <button onClick={handleReset}>RESET</button>
      <TuiDateRangePicker
        handleChange={() => console.log('Hello world!')}
        options={options}
        inputWidth={80}
        containerWidth={200}
        startpickerDate={startDate}
        endpickerDate={endDate}
      />
    </>
  );
}
