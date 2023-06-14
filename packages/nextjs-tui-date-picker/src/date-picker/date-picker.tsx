/* eslint-disable react-hooks/exhaustive-deps */
import React, { MutableRefObject, useEffect, useRef } from 'react';
import DatePicker from 'tui-date-picker';
import * as DateRangePickerCss from '../style/date-picker.css';

export interface TuiDatePickerProps {
  handleChange: (e: any) => void;
  date?: Date;
  inputWidth?: number | 'auto';
  containerWidth?: number;
  containerHeight?: number;
  fontSize?: number;
  backgroundColor?: string;
}

const DatePickerComponent = ({
  handleChange,
  date = new Date(),
  inputWidth = 110,
  containerWidth = 320,
  containerHeight = 42,
  fontSize = 14,
  backgroundColor = '#fff',
}: TuiDatePickerProps) => {
  const datePickerRef = useRef<DatePicker | null | HTMLDivElement>(null);

  useEffect(() => {
    const datePicker = new DatePicker('#wrapper', {
      date,
      input: {
        element: '#datepicker-input',
        format: 'yyyy-MM-dd',
      },
    });

    datePickerRef.current = datePicker;

    return () => {
      datePicker.destroy();
    };
  }, []);

  return (
    <DateRangePickerCss.Container
      style={{ width: containerWidth, height: containerHeight }}
    >
      <div
        className="tui-datepicker-input tui-datetime-input tui-has-focus"
        style={{ width: inputWidth, backgroundColor }}
      >
        <input
          type="text"
          id="datepicker-input"
          className="datepicker-input"
          aria-label="Date-Time"
          onChange={() => handleChange}
          style={{ width: inputWidth, fontSize }}
        />
        <span className="tui-ico-date" />
      </div>
      <div
        id="wrapper"
        style={{ marginTop: '-1px' }}
        ref={datePickerRef as MutableRefObject<HTMLDivElement>}
      />
    </DateRangePickerCss.Container>
  );
};

export default DatePickerComponent;
