import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ReservationDetailsPage from './components/pages/ReservationDetailsPage';
import ReservationConfirmationPage from './components/pages/ReservationConfirmationPage';
import ThankYouPage from './components/pages/ThankYouPage';
import ReservationProvider from './ReservationProvider';

function App() {

  return (
    <ReservationProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/reserve-a-table" element={<ReservationDetailsPage props={{date: date, handleDateChange: handleDateChange, groupSize: groupSize, handleGroupSizeChange: handleGroupSizeChange, occasion: occasion, handleOccasionChange: handleOccasionChange, time: time, handleTimeChange: handleTimeChange }} />} />
            <Route path="/reserve-a-table/confirmation" element={<ReservationConfirmationPage props={{date: date, groupSize: groupSize, occasion: occasion, time: time }} />} /> */}
            <Route path="/reserve-a-table" element={<ReservationDetailsPage />} />
            <Route path="/reserve-a-table/confirmation" element={<ReservationConfirmationPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </div>
      </Router>  
    </ReservationProvider>
  );
}

export default App;
