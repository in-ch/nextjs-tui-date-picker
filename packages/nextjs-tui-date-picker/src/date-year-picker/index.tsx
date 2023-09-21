import React from 'react';
import { TuiDatePickerProps } from '../date-picker/date-picker';
import TuiDatePicker from '../date-picker';

export type TuiDateYearPickerProps = TuiDatePickerProps;

const TuiDateYearPicker = (props: TuiDateYearPickerProps) => {
  return <TuiDatePicker {...props} dateType="year" />;
};

export default TuiDateYearPicker;
