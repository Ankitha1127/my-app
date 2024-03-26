import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Login.css";
import LoginForm from './LoginForm';
import RegisterPatient from './RegisterPatient';
import RegisterDoctor from './RegisterDoctor';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";


function Login()
{
  return (
    <CardGroup className='group'>
      <Card className='card'>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title><b>Login As</b></Card.Title>
          <Card.Text>
            <ul>
            {/* <BrowserRouter>
                
                  <Routes>
                    <Route exact path="/RegisterDoctor" element={<RegisterDoctor/>}/>
                    <Route path="/RegisterPatient" element={<RegisterPatient/>}/>
                  </Routes>
            </BrowserRouter> */}
            </ul>
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title className='heading'>Admin Login</Card.Title>
          <Card.Text>
            <LoginForm></LoginForm>
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
  );
}

export default Login;