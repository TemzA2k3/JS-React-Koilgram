import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import LogInForm from '../Registration-LogIn-Component/LogInForm/LogInForm';
import RegistrationForm from '../Registration-LogIn-Component/RegistrationForm/RegistrationForm';

function App() {
    return (
        <BrowserRouter>
            <div className="App">      
                <Routes>
                    <Route path="/" element={<LogInForm/>}/>  
                    <Route path="/registration" element={<RegistrationForm/>}/>    
                </Routes>
            </div>
        </BrowserRouter>
);
}

export default App;

