import './app.css';
import RegistrationForm from '../registration-form/registration-form'
import LogInForm from '../logIn-form/logIn-form';
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

