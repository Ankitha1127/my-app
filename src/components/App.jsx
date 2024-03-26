import React from 'react';
import Login from './Login';
import RegisterPatient from './RegisterPatient.jsx';
import RegisterDoctor from './RegisterDoctor';
import background from './Img1.jpg';
import BookAppointment from './BookAppointment';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    Router,
    Switch
} from "react-router-dom";

function App ()
{
    return(
        <div style={{backgroundImage:`url(${background})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
            }}>
        <div>
            <Login/>
            {/* <RegisterPatient></RegisterPatient>  */}
            {/* <RegisterDoctor></RegisterDoctor> */}
            {/* <BookAppointment/>  */}
        </div>
    </div>
    );
}

export default App;