import React, {useState, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import ReservationContext from '../ReservationContext';

const BookingForm = () => {
    const {date, setDate, groupSize, setGroupSize, occasion, setOccasion, time, setTime, reservation, setReservation} = useContext(ReservationContext);
    const [dateError, setDateError] = useState(false);
    const [occasionError, setOccasionError] = useState(false);
    const [timeError, setTimeError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        date === "" ? setDateError(true) : setDateError(false);
        occasion === "" ? setOccasionError(true) : setOccasionError(false);
        time === "" ? setTimeError(true) : setTimeError(false);
        setReservation({...reservation, date: date, groupSize: groupSize, occasion: occasion, time: time});
        if(date && occasion && time){
            navigate("/reserve-a-table/confirmation");
        }else {
            console.log("Error: Missing form inputs.");
        }
    }

    return (
        <ReservationDetails onSubmit={handleSubmit} >
            <FormSections>
                <InputLabels htmlFor="resDateInput">DATE:</InputLabels>
                <DateInput type="date" id="resDateInput" min="2024-07-03" max="2024-07-06" defaultValue={date} onChange={(e)=>setDate(e.target.value)} />
                {dateError && <ErrorMessage message="Error: No date selected, please select a date." />}
            </FormSections>
            <FormSections>
                <InputLabels htmlFor="occasionInput">OCCASION:</InputLabels>
                <OccasionInput id="occasionInput" defaultValue={occasion === "" ? "-- select an option --" : occasion} onChange={(e)=>setOccasion(e.target.value)} required>
                    <option hidden disabled>-- select an option --</option>
                    <option value="Casual" >Casual</option>
                    <option value="Birthday" >Birthday</option>
                    <option value="Anniversary" >Anniversary</option>
                </OccasionInput>
                {occasionError && <ErrorMessage message="Error: No occasion type selected, please select a occasion type." />}
            </FormSections>
            <FormSections>
                <InputLabels htmlFor="peopleInput">NUMBER OF PEOPLE:</InputLabels>
                <GroupInput type="number" min="1" max="10" id="peopleInput" defaultValue={groupSize} onChange={(e)=>setGroupSize(e.target.defaultValue)} />
            </FormSections>
            <AvailableTimes>
                <LabelForTimes>AVAILABLE RESERVATION TIMES:</LabelForTimes>
                <TimeContainer>
                    <ReservationTimes className="selectedTime" htmlFor="time1" ><SelectedTime type="radio" id="time1" name="reservationTime" value="4:30pm" onChange={(e)=>(setTime(e.target.value))} checked={time === "4:30pm"} />4:30pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time2" ><SelectedTime type="radio" id="time2" name="reservationTime" value="6:30pm" onChange={(e)=>(setTime(e.target.value))} checked={time === "6:30pm"} />6:30pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time3" ><SelectedTime type="radio" id="time3" name="reservationTime" value="7:00pm" onChange={(e)=>(setTime(e.target.value))} checked={time === "7:00pm"} />7:00pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time4" ><SelectedTime type="radio" id="time4" name="reservationTime" value="7:30pm" onChange={(e)=>(setTime(e.target.value))} checked={time === "7:30pm"} />7:30pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time5" ><SelectedTime type="radio" id="time5" name="reservationTime" value="8:00pm" onChange={(e)=>(setTime(e.target.value))} checked={time === "8:00pm"} />8:00pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time6" ><SelectedTime type="radio" id="time6" name="reservationTime" value="10:30pm" onChange={(e)=>(setTime(e.target.value))} checked={time === "10:30pm"} />10:30pm</ReservationTimes>
                </TimeContainer>
            </AvailableTimes>
            {timeError && <ErrorMessage message="Error: No reservation time selected, please select a reservation time." />}
            <ButtonContainer>
                <Button type="submit" label="Next" />
            </ButtonContainer>
        </ReservationDetails>
    )
}

export default BookingForm;

const ReservationDetails = styled.form`
    gap: 20px;
    padding: 5vh 0;
    text-align: left;
    margin: 5vh 10vw;

    @media (max-width: 430px) {
        display: flex;
        max-width: 400px;
        text-align: left;
    }
`

const FormSections = styled.div`
    margin: 2.5vh 0;
`

const InputLabels = styled.label`
    font-size: 2rem;
`

const DateInput = styled.input`
    padding: 1vh 2.5vw;
    font-size: 1.5rem;
    border-radius: 8pt;
    margin-left: 2rem;

    &:focus {
        background-color: #EDEFEE;
    }
`

const OccasionInput = styled.select`
    font-size: 1.5rem;
    padding: 1vh 2.5vw;
    border-radius: 8pt;
    margin-left: 2rem;
    border: solid 2px #000;

    &:focus {
        background-color: #EDEFEE;
    }
`

const GroupInput = styled.input`
    padding: 1vh 2.5vw;
    font-size: 1.5rem;
    border-radius: 8pt;
    margin: 0 2rem;

    &:focus {
        background-color: #EDEFEE;
    }
`

const Attendance = styled.p`
    font-size: 2rem;
`

const AvailableTimes = styled.fieldset`

`

const LabelForTimes = styled.legend`
    font-size: 2rem;
`

const TimeContainer = styled.div`
    display: flex;
    gap: 2vh 15vw;
    flex-wrap: wrap;
    margin: 2vh 5vw;
`

const ReservationTimes = styled.label`
    font-size: 1.5rem;
    padding: 1rem;
    width: 10vw;
    text-align: center;
    border: solid 1px #000;
    border-radius: 50pt;
    cusor: pointer;
    background-color: #EDEFEE;

`

const SelectedTime = styled.input`
    &:checked {
        font-size: 2rem;
    }
`

const ButtonContainer = styled.div`
    float: right;
    margin: 2.5vh 5vw;
`