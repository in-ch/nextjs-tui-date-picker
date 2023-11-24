import React from 'react';
import dynamic from 'next/dynamic';
import { TuiDatePickerProps } from './date-picker';

const NoSsrDatePicker = dynamic(() => import('./date-picker'), {
  ssr: false,
}) as any;

const TuiDatePicker: React.FC<TuiDatePickerProps> = (props) => {
  return (<NoSsrDatePicker {...props} />) as any;
};

export default TuiDatePicker;
