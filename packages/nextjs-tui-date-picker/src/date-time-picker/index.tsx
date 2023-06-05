/* eslint-disable react-hooks/exhaustive-deps */
import React, { MutableRefObject, useEffect, useRef } from 'react';
import DatePicker from 'tui-date-picker';
import { TuiDatePickerProps } from '../date-picker';
import * as DateRangePickerCss from '../style/date-picker.css';

const TuiTimePicker = ({
  handleChange,
  date = new Date(),
}: TuiDatePickerProps) => {
  const datePickerRef = useRef<DatePicker | null | HTMLDivElement>(null);

  useEffect(() => {
    const datePicker = new DatePicker('#wrapper', {
      date,
      input: {
        element: '#datepicker-input-time',
        format: 'yyyy-MM-dd',
      },
      timePicker: true,
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
          id="datepicker-input-time"
          className="datepicker-input"
          aria-label="Date-Time"
          onChange={() => handleChange}
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

export default TuiTimePicker;
