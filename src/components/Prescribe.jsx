import React from "react";

function Prescribe()
{
    return(
        <div>
            <CardGroup className='group'>
                <Card className='card'>
                    <Card.Body>
                    <Card.Title><b><h1 style={{textAlign:"center" , paddingTop:"2%"}}>PRESCRIBE</h1></b></Card.Title>
                    <Card.Text>
                    <Form style={{paddingTop:"4%"}}>
                <Container  style={{paddingLeft:"4%"}}>
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="patientName">
                    <FloatingLabel controlId="patientFName" label="PFName">
                    <Form.Control type="text" name="pfname" placeholder="Enter patient first name" onChange={handleChange}/>
                    </FloatingLabel>
                    </Form.Group>
                </Col>


                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="doctorName">
                    <FloatingLabel controlId="patientLName" label="PLName">
                    <Form.Control type="text" name="plname" placeholder="Enter patient last name" onChange={handleChange}/>
                    </FloatingLabel>
                    </Form.Group>
                </Col>
                </Row>
            
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="patientCase">
                    <FloatingLabel controlId="doctorname" label="dname">
                    <Form.Control type="text" name="dname" placeholder="Enter doctor name" onChange={handleChange}/>
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

export default Prescribe;