import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import LogInForm from '../Registration-LogIn-Component/LogInForm/LogInForm';
import RegistrationForm from '../Registration-LogIn-Component/RegistrationForm/RegistrationForm';
import MainComponent from '../MainPage/MainComponent/MainComponent';

function App() {
    return (
        <div className="application">
            <Helmet>
                <link rel="icon" href="../../images/favicon.ico" />
            </Helmet>
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/koilgram/'>
                        <Route path="login" element={<LogInForm />} />
                        <Route path="register" element={<RegistrationForm />} />
                        <Route path="mainpage" element={<MainComponent/>} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
    );
}

export default App;

