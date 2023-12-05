/* eslint-disable react-hooks/exhaustive-deps */
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import DatePicker, { CalendarType } from 'tui-date-picker';
import moment from 'moment';
import * as DatePickerCss from '../styles/date-picker.css';
import hexToRgb from '../helper/hexToRgb';

export interface TuiDatePickerProps {
  handleChange: (e: any) => void;
  date?: Date;
  inputWidth?: number | 'auto';
  containerWidth?: number;
  containerHeight?: number;
  fontSize?: number;
  backgroundColor?: string;
  format?: string;
  timePicker?: boolean;
  dateType?: CalendarType;
  padding?: number;
  margin?: number;
}

const DatePickerComponent = ({
  handleChange,
  date = new Date(),
  inputWidth = 120,
  containerWidth = 320,
  containerHeight = 42,
  fontSize = 18,
  backgroundColor = '#fff',
  format = 'yyyy-MM-dd',
  timePicker = false,
  dateType = 'date',
  padding = 10,
  margin = 2,
}: TuiDatePickerProps) => {
  const datePickerRef = useRef<DatePicker | null | HTMLDivElement>(null);
  const [wrapperId] = useState(
    `datepicker-wrapper-${Math.floor(Math.random() * 10000)}`
  );
  const [inputId] = useState(
    `datepicker-input-${Math.floor(Math.random() * 10000)}`
  );

  useEffect(() => {
    const datePicker = new DatePicker(`#${wrapperId}`, {
      date,
      input: {
        element: `#${inputId}`,
        format: format,
      },
      timePicker,
      type: dateType,
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
  }, [date]);

  return (
    <DatePickerCss.Container
      style={{
        width: containerWidth,
        height: containerHeight,
        padding,
        margin,
      }}
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
          style={{
            width: inputWidth,
            fontSize,
            backgroundColor: hexToRgb(backgroundColor),
          }}
        />
      </div>
      <div
        id={wrapperId}
        style={{ marginTop: '-1px' }}
        ref={datePickerRef as MutableRefObject<HTMLDivElement>}
      />
    </DatePickerCss.Container>
  );
};

export default DatePickerComponent;
