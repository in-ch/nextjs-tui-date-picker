/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
'use client';

import React, { useEffect } from 'react';
import DatePicker, { DateRangePickerOptions } from 'tui-date-picker';
import * as DateRangePickerCss from '../style/date-picker.css';

export type DateRangePickerOption = Partial<DateRangePickerOptions>;
export interface TuiDateRangePickerProps {
  options?: DateRangePickerOption;
  handleChange: (e: any) => void;
  startpickerDate?: Date;
  endpickerDate?: Date;
  selectableRangeStart?: Date;
  selectableRangeEnd?: Date;
  inputWidth?: number | 'auto';
  containerWidth?: number;
  containerHeight?: number;
  fontSize?: number;
  backgroundColor?: string;
}

const DateRangePickerComponent: React.FC<TuiDateRangePickerProps> = ({
  options,
  handleChange,
  startpickerDate = new Date(),
  endpickerDate = new Date(),
  inputWidth = 80,
  containerWidth = 320,
  containerHeight = 42,
  fontSize = 14,
  backgroundColor = '#fff',
  selectableRangeStart = new Date(),
  selectableRangeEnd = new Date(
    new Date().getFullYear() + 1,
    new Date().getMonth(),
    new Date().getDate()
  ),
}: TuiDateRangePickerProps) => {
  useEffect(() => {
    const defaultOptions: DateRangePickerOptions = {
      startpicker: {
        date: startpickerDate,
        input: '#startpicker-input',
        container: '#startpicker-container',
      },
      endpicker: {
        date: endpickerDate,
        input: '#endpicker-input',
        container: '#endpicker-container',
      },
      language: 'ko',
      usageStatistics: false,
      selectableRanges: [[selectableRangeStart, selectableRangeEnd]],
      format: 'YYYY-MM-dd',
    };
    const mergedOptions = { ...defaultOptions, ...options };
    const picker = DatePicker.createRangePicker(mergedOptions);

    picker.on('change:end', () => {
      handleChange([
        (picker as any)._startpicker._date,
        (picker as any)._endpicker._date,
      ]);
    });

    return () => {
      picker.destroy();
    };
  }, [endpickerDate, handleChange, options, startpickerDate]);
  return (
    <DateRangePickerCss.Container
      style={{ width: containerWidth, height: containerHeight }}
    >
      <input
        type="text"
        id="startpicker-input"
        placeholder="Start Date"
        style={{ width: inputWidth, fontSize }}
      />
      <div
        id="startpicker-container"
        style={{ zIndex: 9999, backgroundColor }}
      />
      <DateRangePickerCss.Dash>~</DateRangePickerCss.Dash>
      <input
        type="text"
        id="endpicker-input"
        placeholder="End Date"
        style={{ width: inputWidth, fontSize }}
      />
      <div id="endpicker-container" style={{ zIndex: 9999, backgroundColor }} />
    </DateRangePickerCss.Container>
  );
};

export default DateRangePickerComponent;
