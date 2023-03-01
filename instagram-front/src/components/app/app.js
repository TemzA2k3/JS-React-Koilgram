import './App.css';
import RegistrationForm from '../LogIn-Registration-Component/RegistrationForm/RegistrationForm'
import LogInForm from '../LogIn-Registration-Component/LogInForm/LogIn-Form';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">      
                <Routes>
                    <Route path="/" element={<RegistrationForm/>}/>  
                    <Route path="/logIn" element={<LogInForm/>}/>    
                </Routes>
            </div>
        </BrowserRouter>
);
}

export default App;

