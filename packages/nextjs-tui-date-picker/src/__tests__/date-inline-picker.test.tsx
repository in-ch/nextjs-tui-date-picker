import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TuiDateInlinePicker from '../date-inline-picker';

describe('date-inline-picker', () => {
  const handleChange = jest.fn();
  render(<TuiDateInlinePicker handleChange={handleChange} />);

  it('TuiDateInlinePicker renders correctly', () => {
    const inputElement = screen.getByLabelText('Date-Time');

    fireEvent.change(inputElement, { target: { value: '2022-06-15' } });
    expect((inputElement as any).value).toBe('2022-06-15');

    const currentDate = new Date();

    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const monthsOfYear = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `Today: ${dayOfWeek}, ${month} ${day}, ${year}`;

    const datePickerWrapper = screen.getByText(formattedDate);
    expect(datePickerWrapper).toBeInTheDocument();
  });
});
