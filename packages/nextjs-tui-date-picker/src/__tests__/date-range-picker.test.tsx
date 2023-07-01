import React from 'react';
import { render } from '@testing-library/react';
import DateRangePickerComponent from '../date-range-picker/date-range-picker';

jest.mock('moment');
const mockHandleChange = jest.fn();

describe('DatePickerComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with default props', () => {
    render(<DateRangePickerComponent handleChange={mockHandleChange} />);

    const startPickerInput = document.getElementById('startpicker-input');
    const endPickerInput = document.getElementById('endpicker-input');

    expect(startPickerInput).toBeInTheDocument();
    expect(endPickerInput).toBeInTheDocument();
  });

  it('renders correctly - snapshot', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <DateRangePickerComponent handleChange={handleChange} startpickerDate={new Date('2023-01-01')}  endpickerDate={new Date('2023-01-01')} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
