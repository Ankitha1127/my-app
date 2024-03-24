import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function RegisterDoctor(){
    return(
        <div>
            <CardGroup className='group'>
                <Card className='card'>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                    <Card.Title><b><h1 style={{textAlign:"center" , paddingTop:"2%"}}>REGISTER DOCTOR</h1></b></Card.Title>
                    <Card.Text>
            
            <Form style={{paddingTop:"4%"}}>
                <Container  style={{paddingLeft:"4%"}}>
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicName">
                    <FloatingLabel controlId="floatingName" label="Name">
                    <Form.Control type="text" placeholder="Enter name" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                    </FloatingLabel>
                    </Form.Group>
                </Col>


                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="DOB">
                    <Form.Control type="date" placeholder="" />
                    </FloatingLabel>
                    </Form.Group>
                </Col>

                </Row>
            

            
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="Blood Group">
                    <Form.Select aria-label="Default select example">
                    <option>Select blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="Address">
                    <Form.Control type="text" placeholder="Enter Address" />
                    </FloatingLabel>
                    </Form.Group>
                </Col>
            
                </Row>

                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingEmail" label="Email ID">
                        <Form.Control type="email" placeholder="Enter Email" />
                        </FloatingLabel>
                    </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Age">
                        <Form.Control type="text" placeholder="Enter age" />
                        </FloatingLabel>
                    </Form.Group>
                    </Col>

                </Row>


                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Gender">
                        <Form.Select aria-label="Default select example">
                        <option>Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Not to mention">Not to mention</option>
                    </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Contact Number">
                        <Form.Control type="text" placeholder="Enter contact number" />
                        </FloatingLabel>
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    </Col>

                </Row>
                </Container>
            <Button variant="primary" type="submit" style={{marginLeft:"43%"}}>
                REGISTER
            </Button>
            </Form>
            </Card.Text>
        </Card.Body>
        </Card>
    </CardGroup>
    </div>
 
  );
}

export default RegisterDoctor;