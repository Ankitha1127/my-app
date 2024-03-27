import React from "react";
import { Table } from "react-bootstrap";

function ViewAppointments()
{
    return(
        <div>
            <Table striped>
            <thead>
                <tr>
                <th>Appointment ID</th>
                <th>Patient First Name</th>
                <th>Patient Last Name</th>
                <th>Doctor name</th>
                <th>Date</th>
                <th>Prescribe</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Puth</td>
                <td>24-April-2024</td>
                <td><button>Prescribe</button></td>
                </tr>
                <tr>
                <td>2</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Puth</td>
                <td>24-April-2024</td>
                <td><button>Prescribe</button></td>
                </tr>
                <tr>
                <td>3</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Puth</td>
                <td>24-April-2024</td>
                <td><button>Prescribe</button></td>
                </tr>
            </tbody>
            </Table>
        </div>
    );
}

export default ViewAppointments;