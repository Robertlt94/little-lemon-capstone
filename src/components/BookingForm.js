import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const BookingForm = ({date, setDate, groupSize, setGroupSize, occasion, setOccasion}) => {

    return (
        // <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <ReservationDetails action="/reserve-a-table/confirmation">
            <FormSections>
                <InputLabels htmlFor="resDateInput">DATE:</InputLabels>
                <DateInput type="date" id="resDateInput" min="2024-06-06" max="2024-06-07" value={date} onChange={(event)=>setDate(event.target.value)} required/>
            </FormSections>
            <FormSections>
                <InputLabels htmlFor="occasionInput">OCCASION:</InputLabels>
                <OccasionInput id="occasionInput" defaultValue="-- select an option --" required>
                    <option disabled hidden > -- select an option -- </option>
                    <option>Casual</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </OccasionInput>
            </FormSections>
            <FormSections>
                <InputLabels htmlFor="peopleInput">NUMBER OF PEOPLE:</InputLabels>
                <GroupInput type="number" placeholder="1" min="1" max="10" id="peopleInput" value={groupSize} onChange={(event)=>setGroupSize(event.target.value)} required/>
            </FormSections>
            <AvailableTimes>
                <LabelForTimes>AVAILABLE RESERVATION TIMES:</LabelForTimes>
                <TimeContainer>
                    <ReservationTimes className="selectedTime" htmlFor="time1" ><SelectedTime type="radio" id="time1" name="reservationTime" value="4:30pm" />4:30pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time2" ><SelectedTime type="radio" id="time2" name="reservationTime" value="6:30pm" />6:30pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time3" ><SelectedTime type="radio" id="time3" name="reservationTime" value="7:00pm" />7:00pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time4" ><SelectedTime type="radio" id="time4" name="reservationTime" value="7:30pm" />7:30pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time5" ><SelectedTime type="radio" id="time5" name="reservationTime" value="8:00pm" />8:00pm</ReservationTimes>
                    <ReservationTimes className="selectedTime" htmlFor="time6" ><SelectedTime type="radio" id="time6" name="reservationTime" value="10:30pm" />10:30pm</ReservationTimes>
                </TimeContainer>
            </AvailableTimes>
            {/* <label htmlFor="resTimeInput">RESERVATION TIMES AVAILABLE:</label>
            <select id="resTimeInput">
                <option>16:30</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>22:30</option>
            </select> */}
            <ButtonContainer>
                <NextButton type="submit" label="Next" />
            </ButtonContainer>
        </ReservationDetails>
    )
}

export default BookingForm;

const ReservationDetails = styled.form`
    width: 
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

    $(SelectedTime):checked & {
        background-color: #000;
    }
`

const SelectedTime = styled.input`

`

const ButtonContainer = styled.div`
    float: right;
    margin: 2.5vh 5vw;
`

const NextButton = styled(Button)`

`