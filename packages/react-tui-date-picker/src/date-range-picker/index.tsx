'use client';

import React, { useEffect } from 'react';
import DatePicker, { DateRangePickerOptions } from 'tui-date-picker';
import * as DateRangePickerCss from './date-range-picker.css';

export type DateRangePickerOption = Partial<DateRangePickerOptions>;
export interface DateRangePickerProps {
  options?: DateRangePickerOption;
  handleChange: (e: any) => void;
  startpickerDate?: Date;
  endpickerDate?: Date;
}

const TuiDateRangePickerApp: React.FC<DateRangePickerProps> = ({
  options,
  handleChange,
  startpickerDate = new Date(),
  endpickerDate = new Date(),
}: DateRangePickerProps) => {
  useEffect(() => {
    const today = new Date(startpickerDate);
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
      selectableRanges: [
        [
          today,
          new Date(today.getFullYear() + 1, today.getMonth(), today.getDate()),
        ],
      ],
      format: 'YYYY-MM-dd HH:mm',
    };
    const mergedOptions = { ...defaultOptions, ...options };
    const picker = DatePicker.createRangePicker(mergedOptions);

    picker.on('change:end', () => {
      const startDate = new Date(startpickerDate);
      const endDate = new Date(endpickerDate);
      handleChange([startDate, endDate]);
    });

    return () => {
      picker.destroy();
    };
  }, [endpickerDate, handleChange, options, startpickerDate]);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <DateRangePickerCss.Container>
      <input type="text" id="startpicker-input" placeholder="Start Date" />
      <div
        id="startpicker-container"
        style={{ zIndex: 9999, backgroundColor: '#fff' }}
      />
      <DateRangePickerCss.Dash>~</DateRangePickerCss.Dash>
      <input type="text" id="endpicker-input" placeholder="End Date" />
      <div
        id="endpicker-container"
        style={{ zIndex: 9999, backgroundColor: '#fff' }}
      />
    </DateRangePickerCss.Container>
  );
};

export default TuiDateRangePickerApp;
