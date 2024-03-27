import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Arjun from './Arjun.jpg';
import { Table } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { PersonHalfDress } from 'react-icons/fa';

function DisplayPatient()
{
    return(
    <Card className="text-center" style={{marginTop:"0%"}}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
        <Container>
            <Row>
                <Col><Card style={{ width: '18rem' ,marginTop:"0%"}}>
                <Card.Img variant="top" src={Arjun} style={{height: "200px", borderRadius:"800px", marginTop:"0%", marginLeft:"3%" , marginRight:"3%"}}/>
                <Card.Body>
                    <Card.Title>Arjun</Card.Title>
                    <Card.Text>
                        Registerd for the case of fever.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>1001</ListGroup.Item>
                    <ListGroup.Item>Male</ListGroup.Item>
                    <ListGroup.Item>ankithar1127@gmail.com</ListGroup.Item>
                    <ListGroup.Item>8457119562</ListGroup.Item>
                    <ListGroup.Item>'shree panchadurga', mulki</ListGroup.Item>
                    <ListGroup.Item>O +ve</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card></Col>
                <Col xs={5}>
                <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            
            <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            
            </Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
            

            
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
            
  );
}

export default DisplayPatient;