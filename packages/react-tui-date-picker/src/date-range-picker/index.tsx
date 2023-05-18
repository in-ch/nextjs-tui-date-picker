import React, { useEffect } from 'react';
import DatePicker, { DateRangePickerOptions } from 'tui-date-picker';
import 'tui-date-picker/dist/tui-date-picker.css';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 340px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  & > input {
    background: none;
    width: 130px;
    text-align: center;
    font-size: 15px;
    color: rgb(100, 100, 100);
    border: 0;
    outline: 0;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }
  @media (max-width: 339px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Dash = styled.p`
  margin-left: 10px;
  margin-right: 10px;
`;

export type DateRangePickerOption = Partial<DateRangePickerOptions>;
export interface DateRangePickerProps {
  options?: DateRangePickerOption;
  handleChange: (e: any) => void;
  startpickerDate?: Date;
  endpickerDate?: Date;
}

const TuiDateRangePicker: React.FC<DateRangePickerProps> = ({
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
    <Container>
      <input type="text" id="startpicker-input" placeholder="Start Date" />
      <div
        id="startpicker-container"
        style={{ zIndex: 9999, backgroundColor: '#fff' }}
      />
      <Dash>~</Dash>
      <input type="text" id="endpicker-input" placeholder="End Date" />
      <div
        id="endpicker-container"
        style={{ zIndex: 9999, backgroundColor: '#fff' }}
      />
    </Container>
  );
};

export default TuiDateRangePicker;
