import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../Header';
import HelpIcon from '@mui/icons-material/Help';
import Button from '../Button';
import BookingForm from '../BookingForm';

const ReservationDetailsPage = ({date, setDate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }) => {

    return (
        <div>
            <Header />
            <PageDescription>
                <Page>Reservation Details</Page>
                <p>Please provide us with the information below to help us prepare for your reservation.</p>
            </PageDescription>
            <BookingForm date={date} setDate={setDate} />
            {/* <FormContainer>
                <label>Date:</label>
                <input type="date" min="2024-05-21" max="2024-05-25" value={date} onChange={(e)=>handleDateChange(e)} />
                <p>Party Size:</p>
                <label>Senior(s)</label><HelpIcon fontSize='small'/>
                <input type="number" min="0" value="0" onChange={(e)=>handleSeniorChange(e)} />
                <label>Adult(s)</label><HelpIcon fontSize='small'/>
                <input type="number" min="0" value="0"/>
                <label>Kid(s)</label><HelpIcon fontSize='small'/>
                <input type="number" min="0" value="0"/>
                <Frame>
                    <legend>Available Reservation Times (Select One)</legend>
                    <TimeSlots>
                    {availability[0].times.filter(table => table.reserved === false).map((table, index) => {
                        return (
                            <AvailableTimes key={index} >
                                <input type="radio" id="time" name="time" value={table.time}/>
                                <label htmlFor="time">{table.time}</label>
                            </AvailableTimes>
                        )
                    })}
                    </TimeSlots>
                </Frame>
                <NextButton type="button" path="/reserve-a-table/confirmation" label="Next" />
            </FormContainer> */}
            <img src='../assets/images/logo1.jpg' />
        </div>
    )
};
export default ReservationDetailsPage;

const PageDescription = styled.div`
    background-color: #495E57;
    color: #fff;
    padding: 5vh 5vw;
    font-size: 2rem;
`

const Page = styled.h1`
    color: #F4CE14;
`

const FormContainer = styled.form`
    margin: 5vh 5vw;
    font-size: 1.5rem;
`

const Frame = styled.fieldset`
    margin: 5vh 5vw;
`

const TimeSlots = styled.ul`
    list-style: none;
    text-align: center;
    width: 70vw;
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(4, 1fr);
    row-gap: 5vh;
`

const AvailableTimes = styled.li`
    background-color: #EDEFEE;
    box-shadow: 0 0 3px 2px #9fa1a0;
    border-radius: 8pt;
    padding: 10px;
    font-size: 1.5rem;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
        &:checked {
        background-color: #967C00;
        color: #fff;
    }
`
const NextButton = styled(Button)`
`