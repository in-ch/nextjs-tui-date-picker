/* eslint-disable react-hooks/exhaustive-deps */
import React, { MutableRefObject, useEffect, useRef } from 'react';
import DatePicker from 'tui-date-picker';
import { TuiDatePickerProps } from '../date-picker';
import * as DateRangePickerCss from '../style/date-picker.css';

const TuiDateMonthPicker = ({
  handleChange,
  date = new Date(),
}: TuiDatePickerProps) => {
  const datePickerRef = useRef<DatePicker | null | HTMLDivElement>(null);

  useEffect(() => {
    const datePicker = new DatePicker('#wrapper', {
      date,
      language: 'en',
      type: 'month',
      input: {
        element: '#datepicker-input-month',
        format: 'yyyy-MM',
      },
    });

    datePickerRef.current = datePicker;

    return () => {
      datePicker.destroy();
    };
  }, []);

  return (
    <DateRangePickerCss.Container>
      <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
        <input
          type="text"
          id="datepicker-input-month"
          className="datepicker-input"
          aria-label="Date-Time"
          onChange={() => handleChange}
        />
        <span className="tui-ico-date" />
      </div>
      <div
        id="wrapper"
        style={{ marginTop: '-1px', backgroundColor: 'red' }}
        ref={datePickerRef as MutableRefObject<HTMLDivElement>}
      />
    </DateRangePickerCss.Container>
  );
};

export default TuiDateMonthPicker;
