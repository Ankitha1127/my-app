import React from "react";
import Login from "./Login";
function Link()
{
    return(
        <div>
                <li><Link to="/Login">Doctor</Link></li>
        <li><Link to="/RegisterPatient">Analytics Center</Link></li> 
        </div>
        
    );
}

export default Link;