import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {message} from "antd"

const Registration=()=>{
    const [input, setInput] = useState({})
    const navigate = useNavigate()
    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values,[name]:value}))
       console.log(input)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let api="http://localhost:8005/user/registration";
        axios.post(api, input).then((res)=>{
          console.log(res);
          message.success("You are succesfully registered!");
          navigate("/login");
        })
      }
    return(
        <>
          <h1>User Registration</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} placeholder="Enter Name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name="email" value={input.email} onChange={handleInput} placeholder="Enter email" />
       
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name="password" value={input.password} onChange={handleInput} placeholder="Password " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Registration