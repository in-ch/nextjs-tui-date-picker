/* eslint-disable react-hooks/exhaustive-deps */
import React, { MutableRefObject, useEffect, useRef } from 'react';
import DatePicker from 'tui-date-picker';
import moment from 'moment';

import * as DateRangePickerCss from '../style/date-picker.css';

export interface TuiDatePickerProps {
  handleChange: (e: any) => void;
  date?: Date;
  inputWidth?: number | 'auto';
  containerWidth?: number;
  containerHeight?: number;
  fontSize?: number;
  backgroundColor?: string;
  wrapperId?: string;
  inputId?: string;
  format?: string;
}

const DatePickerComponent = ({
  handleChange,
  date = new Date(),
  inputWidth = 120,
  containerWidth = 320,
  containerHeight = 42,
  fontSize = 14,
  backgroundColor = '#fff',
  wrapperId = 'datepicker-wrapper', // 새로운 id 속성 추가
  inputId = 'datepicker-input',
  format = 'yyyy-MM-dd',
}: TuiDatePickerProps) => {
  const datePickerRef = useRef<DatePicker | null | HTMLDivElement>(null);

  useEffect(() => {
    const datePicker = new DatePicker(`#${wrapperId}`, {
      date,
      input: {
        element: `#${inputId}`,
        format: format,
      },
    });

    // Each time the "change" event is triggered in the datePicker,
    // a new Date object is created from the selected date.
    // The year, month, and day components of the date are extracted
    // and formatted to the "YYYY-MM-DD" format.
    // The handleChange function is then called with the new Date object.
    // The previously created Date object will eventually be garbage collected
    // as it is no longer referenced, and memory management is handled automatically by the JavaScript engine.
    datePicker.on('change', () => {
      const newDate = datePicker.getDate();
      const formattedDate = moment(newDate).format(format.toUpperCase());
      handleChange(formattedDate);
    });
    datePickerRef.current = datePicker;
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
          id={inputId}
          className={inputId}
          aria-label="Date-Time"
          onChange={(e) =>
            handleChange(
              String((e.target as EventTarget & HTMLInputElement).value)
            )
          }
          style={{ width: inputWidth, fontSize }}
        />
        <span className="tui-ico-date" />
      </div>
      <div
        id={wrapperId}
        style={{ marginTop: '-1px' }}
        ref={datePickerRef as MutableRefObject<HTMLDivElement>}
      />
    </DateRangePickerCss.Container>
  );
};

export default DatePickerComponent;
