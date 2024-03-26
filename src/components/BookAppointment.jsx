import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';

function BookAppointment()
{
    const [details,setDetails] = useState({
        pname: "",
        dname: "",
        case: "",
        date: ""
      });
    
    function handleChange(event)
    {
    const name1=(event.target.name);
    const value1=(event.target.value); 
    setDetails((prev)=>{
      return{...prev,[name1]:value1}
    })
    };

    console.log(details);
    return(
        <div>
            <CardGroup className='group'>
                <Card className='card'>
                    <Card.Body>
                    <Card.Title><b><h1 style={{textAlign:"center" , paddingTop:"2%"}}>BOOK APPOINTMENT</h1></b></Card.Title>
                    <Card.Text>
            
            <Form style={{paddingTop:"4%"}}>
                <Container  style={{paddingLeft:"4%"}}>
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="patientName">
                    <FloatingLabel controlId="patientName" label="Name">
                    <Form.Control type="text" name="pname" placeholder="Enter Patient name" onChange={handleChange}/>
                    </FloatingLabel>
                    </Form.Group>
                </Col>


                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="doctorName">
                    <FloatingLabel controlId="doctorPassword" label="Doctor">
                    <Form.Control type="text" name="dname" placeholder="Enter doctor name" onChange={handleChange}/>
                    </FloatingLabel>
                    </Form.Group>
                </Col>
                </Row>
            
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="patientCase">
                    <FloatingLabel controlId="patientCase" label="Case">
                    <Form.Control type="text" name="case" placeholder="Type case description" onChange={handleChange}/>
                    </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="appDate">
                    <FloatingLabel controlId="appDate" label="Case">
                    <Form.Control type="date" name="date" onChange={handleChange}/>
                    </FloatingLabel>
                    </Form.Group>
                </Col>
                </Row>
                    
                </Container>
            <Button variant="primary" type="submit" style={{marginLeft:"43%"}}>
                BOOK
            </Button>
            </Form>
            </Card.Text>
        </Card.Body>
        </Card>
    </CardGroup>
    </div>
 
  );
}

export default BookAppointment;