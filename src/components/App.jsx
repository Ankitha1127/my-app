import React from 'react';
import Login from './Login';
import RegisterPatient from './RegisterPatient.jsx';
import RegisterDoctor from './RegisterDoctor';
import background from './Img1.jpg';
import BookAppointment from './BookAppointment';
import DisplayPatient from './DisplayPatient.jsx';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    Router,
    Switch
} from "react-router-dom";
import ViewAppointments from './ViewAppointments.jsx';


<script src="https://kit.fontawesome.com/eefbdc4b40.js" crossorigin="anonymous"></script>


function App ()
{
    return(
        // <div style={{backgroundImage:`url(${background})`,
        //     height: "100vh",
        //     backgroundSize: "cover",
        //     backgroundRepeat: "no-repeat",
        //     paddingTop: "0%"
        //     }}>
        <div>
        <div>
            {/* <Login/> */}
            {/* <RegisterPatient></RegisterPatient>  */}
            {/* <RegisterDoctor></RegisterDoctor> */}
            {/* <BookAppointment/>  */}
            {/* <DisplayPatient></DisplayPatient> */}
            <ViewAppointments></ViewAppointments>
        </div>
    </div>
    );
}

export default App;