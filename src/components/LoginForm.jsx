import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import { useState } from 'react';

function LoginForm() {
  const [details,setDetails] = useState({
    email: "",
    password: ""
  }
  );

  function handleChange(event)
  {
    const name1=(event.target.name);
    const value1=(event.target.value); 
    setDetails((prev)=>{
      return{...prev,[name1]:value1}
    })
  };

  console.log(details);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit" className='Lbutton'>
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;