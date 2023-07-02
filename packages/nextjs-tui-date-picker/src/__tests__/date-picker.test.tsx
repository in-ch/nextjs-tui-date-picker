import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePickerComponent from '../date-picker/date-picker';

jest.mock('moment');
const mockHandleChange = jest.fn();

describe('DatePickerComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with default props', () => {
    render(<DatePickerComponent handleChange={mockHandleChange} />);

    const inputElement = screen.getByLabelText('Date-Time');
    const prev_month = screen.getByText('Prev month');
    const next_month = screen.getByText('Next month');
    const datepickerInput = document.getElementById('datepicker-input');

    expect(inputElement).toBeInTheDocument();
    expect(prev_month).toBeInTheDocument();
    expect(next_month).toBeInTheDocument();
    expect(datepickerInput).toBeInTheDocument();
  });
});
