import React from 'react';
import { useState } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../DatePicker.css';

const PaymentDateOptions: React.FC = () => {

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    console.log(startDate);

    return (
        <DatePicker
            required
            inline
            selected={startDate}
            onChange={(date) => setStartDate(date)}
        />
    );
}

export default PaymentDateOptions;
