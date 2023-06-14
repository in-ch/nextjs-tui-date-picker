import React from 'react';
import dynamic from 'next/dynamic';
import { TuiDatePickerProps } from './date-picker';

const NoSsrDatePicker = dynamic(() => import('./date-picker'), {
  ssr: false,
});

const TuiDatePicker = (props: TuiDatePickerProps) => {
  return <NoSsrDatePicker {...props} />;
};

export default TuiDatePicker;
