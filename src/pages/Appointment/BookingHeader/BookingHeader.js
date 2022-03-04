import { Container, Grid } from '@mui/material';
import React from 'react';
// import bookingBackGroundVideo from '../../../videos/booking.mp4'
import Calender from '../../Shared/Calender/Calender';
import './BookingHeader.css';
import bannerPic from '../../../images/banner/bookingBanner.webp'

const BookingHeader = ({date,setDate}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7} >
                   <Calender
                    date={date}
                    setDate={setDate}
                   ></Calender>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img src={bannerPic} alt="nothing" style={{width:"100%"}} />
                </Grid>
        </Grid>
        </Container>
    );
};

export default BookingHeader;