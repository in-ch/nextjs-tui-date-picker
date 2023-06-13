'use client';

import {
  TuiDateRangePicker,
  DateRangePickerOption,
} from 'nextjs-tui-date-picker';

export default function Page() {
  const options: DateRangePickerOption = {
    language: 'en',
    usageStatistics: false,
    format: 'MM-dd YYYY',
  };

  return (
    <>
      <TuiDateRangePicker
        handleChange={() => console.log('Hello world!')}
        options={options}
        inputWidth={80}
        containerWidth={200}
        startpickerDate={new Date('2023-01-02')}
        endpickerDate={new Date('2023-01-30')}
      />
    </>
  );
}
