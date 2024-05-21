import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Header from '../Header';
import HelpIcon from '@mui/icons-material/Help';

const ReservationDetailsPage = ({date, availability, handleDateChange, handleSeniorChange}) => {

    return (
        <div>
            <Header />
            <PageDescription>
                <Page>Reservation Details</Page>
                <p>Please provide us with the information below to help us prepare for your reservation. <br /> NOTICE: Reservations are only available on the day of and 4 business days ahead.</p>
            </PageDescription>
            <FormContainer>
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
                    {availability.filter(table => table.reserved === false).map((table, index) => {
                        return (
                            <AvailableTimes key={index} >
                                <input type="radio" id="time" name="time" value={table.time}/>
                                <label htmlFor="time">{table.time}</label>
                            </AvailableTimes>
                        )
                    })}
                    </TimeSlots>
                </Frame>
                <button type="submit"><Link to="/reserve-a-table/confirmation" >Next</Link></button>
            </FormContainer>
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
    columns: 3;
    text-align: center;
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