import React from 'react';
import { render, screen } from '@testing-library/react';
import TuiDateTimePicker from '../date-time-picker';

jest.mock('moment');
const mockHandleChange = jest.fn();

describe('TuiDateTimePicker', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with default props', () => {
    render(<TuiDateTimePicker handleChange={mockHandleChange} />);

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
