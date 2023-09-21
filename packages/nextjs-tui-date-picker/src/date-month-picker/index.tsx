import React from 'react';
import { TuiDatePickerProps } from '../date-picker/date-picker';
import TuiDatePicker from '../date-picker';

export type TuiDateMonthPickerProps = TuiDatePickerProps;

const TuiDateMonthPicker = (props: TuiDateMonthPickerProps) => {
  return <TuiDatePicker {...props} dateType="month" />;
};

export default TuiDateMonthPicker;
