import React from 'react';
import { TuiDatePickerProps } from '../date-picker/date-picker';
import TuiDatePicker from '../date-picker';

export type TuiDateTimePickerProps = TuiDatePickerProps;

const TuiDateTimePicker = (props: TuiDateTimePickerProps) => {
  return <TuiDatePicker {...props} timePicker />;
};

export default TuiDateTimePicker;
