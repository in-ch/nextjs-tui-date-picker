/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import DatePicker, { DateRangePickerOptions } from 'tui-date-picker';
import 'tui-inch-core/dist/date-picker.module.css';

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
  format?: string;
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
  format = 'YYYY-MM-dd',
}: TuiDateRangePickerProps) => {
  const [startpickerInputId] = useState(
    `startpicker-input-${Math.floor(Math.random() * 10000)}`
  );
  const [startpickerContainerId] = useState(
    `startpicker-container-${Math.floor(Math.random() * 10000)}`
  );
  const [endpickerInputId] = useState(
    `endpicker-input-${Math.floor(Math.random() * 10000)}`
  );
  const [endpickerContainerId] = useState(
    `endpicker-container-${Math.floor(Math.random() * 10000)}`
  );

  useEffect(() => {
    const defaultOptions: DateRangePickerOptions = {
      startpicker: {
        date: startpickerDate,
        input: `#${startpickerInputId}`,
        container: `#${startpickerContainerId}`,
      },
      endpicker: {
        date: endpickerDate,
        input: `#${endpickerInputId}`,
        container: `#${endpickerContainerId}`,
      },
      language: 'ko',
      usageStatistics: false,
      format,
    };
    const mergedOptions = { ...defaultOptions, ...options };
    const picker = DatePicker.createRangePicker(mergedOptions);

    picker.on('change:end', () => {
      const newStartDate = (picker as any)._startpicker._date;
      const newEndDate = (picker as any)._endpicker._date;
      handleChange([newStartDate, newEndDate]);
    });

    return () => {
      picker.destroy();
    };
  }, [endpickerDate, handleChange, options, startpickerDate]);

  return (
    <div
      className="container"
      style={{ width: containerWidth, height: containerHeight }}
    >
      <input
        type="text"
        id={startpickerInputId}
        placeholder="Start Date"
        style={{ width: inputWidth, fontSize }}
      />
      <div
        id={startpickerContainerId}
        style={{ zIndex: 9999, backgroundColor }}
      />
      <div className="dash">~</div>
      <input
        type="text"
        id={endpickerInputId}
        placeholder="End Date"
        style={{ width: inputWidth, fontSize }}
      />
      <div
        id={endpickerContainerId}
        style={{ zIndex: 9999, backgroundColor }}
      />
    </div>
  );
};

export default DateRangePickerComponent;
