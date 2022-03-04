import React from 'react';
import Navigation from '../../Shared/Navigation';
import AvailableBooking from '../AvailableBooking/AvailableBooking';
import BookingHeader from '../BookingHeader/BookingHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation/>
            <BookingHeader date={date} setDate={setDate} />
            <AvailableBooking date={date}/>
        </div>
    );
};

export default Appointment;