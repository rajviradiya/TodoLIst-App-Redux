import React, { useEffect, useState } from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addUser } from '../Store/Slice/ToDolist'

const AddUser = () => {

    const  [user,setUser] = useState("")

    const dispatch = useDispatch();

    const handleInput = (e)=>{
        setUser(e.target.value)
    }

    /** for todo  
        const handleAddUser = ()=>{
        dispatch(fetchTodos())
    }*/
    
      
    const handleAddUser = ()=>{
        if(user.trim !== ''){
            dispatch(addUser(user))
            setUser('')
        }
    };

    /* for tood useselector
    const state = useSelector((state)=>state)
    console.log(state)
    */

  return (
    <Container fluid>
      <Col>
      
      <Row >
        <h1>TODO LIST</h1>
        <hr/>
        <input type='text' className=' border rounded-3 mb-3 p-2' value={user}  placeholder='Add User ....' onChange={(e)=>{handleInput(e)}}/>
      </Row>

      <Row>
        <Button className='p-1 w-25 ms-3' onClick={()=>handleAddUser()} >Add User ..</Button>
      </Row>
      </Col>
    </Container>
  )
}

export default AddUser
