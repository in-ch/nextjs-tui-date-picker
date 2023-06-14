import React from 'react';
import dynamic from 'next/dynamic';
import { TuiDateRangePickerProps } from './date-range-picker';

const NoSsrDateRangePicker = dynamic(() => import('./date-range-picker'), {
  ssr: false,
});

const TuiDateRangePicker = (props: TuiDateRangePickerProps) => {
  return <NoSsrDateRangePicker {...props} />;
};

export default TuiDateRangePicker;
