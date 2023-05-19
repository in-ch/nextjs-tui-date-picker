import React, { MutableRefObject, useEffect, useRef } from 'react';
import DatePicker from 'tui-date-picker';
import * as DateRangePickerCss from '../style/date-picker.css';

const TuiDatePicker = () => {
  const datePickerRef = useRef<DatePicker | null | HTMLDivElement>(null);

  useEffect(() => {
    const datePicker = new DatePicker('#wrapper', {
      date: new Date(),
      input: {
        element: '#datepicker-input',
        format: 'yyyy-MM-dd',
      },
    });

    datePickerRef.current = datePicker;

    datePicker.on('change', () => {
      alert('asd');
      console.log(datePicker.getDate);
    });

    return () => {
      datePicker.destroy();
    };
  }, []);

  const handleChange = () => {
    alert('handleChange!!!');
  };

  return (
    <DateRangePickerCss.Container>
      <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
        <input
          type="text"
          id="datepicker-input"
          className="datepicker-input"
          aria-label="Date-Time"
          onChange={handleChange}
        />
        <span className="tui-ico-date" />
      </div>
      <div
        id="wrapper"
        style={{ marginTop: '-1px', backgroundColor: 'red' }}
        ref={datePickerRef as MutableRefObject<HTMLDivElement>}
      />
    </DateRangePickerCss.Container>
  );
};

export default TuiDatePicker;
