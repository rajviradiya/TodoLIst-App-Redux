import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../Store/Slice/ToDolist';
import { Container, Table } from 'react-bootstrap';

const ShowUsers = () => {
  
const user = useSelector(selectUser)


console.log(user)
    return (
      <Container fluid className=' mt-3'>
        <Table>
            <thead>
                <tr>
                    <th>Add Users data</th>
                </tr>
            </thead>
            <tbody>
                     {/* Display data from Redux store */
        
            user.map((data,index)=>{
                return(
                    <tr key={index}>
                    <td>{data}</td>
                    </tr>
                )
            })
        }
            </tbody>
        </Table>

       
      </Container>
    );
  };

export default ShowUsers
