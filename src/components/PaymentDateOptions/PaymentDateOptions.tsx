import React, { useEffect } from 'react';
import { useState } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../DatePicker.css';

interface PaymentDateOptionsProps {
  setNextPayment: Function;
}

const PaymentDateOptions = (props: PaymentDateOptionsProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  useEffect(() => {
    props.setNextPayment(startDate);
  }, [startDate]);

  return (
    <DatePicker
      required
      inline
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={new Date()}
    />
  );
};

export default PaymentDateOptions;
