import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { BiCollapseVertical } from "react-icons/bi";
function UserProfile() {
  const [open, setOpen] = useState(false);
  return (
    <div>
       <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{float:'right'}}
      >
      <BiCollapseVertical className='fs-1'/> 
      </Button>
      <Collapse in={open}>

      <div className="text-center p-5">
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" width={'200px'} alt="" />
            <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Username" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Github"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Github" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="LinkedIn"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="LinkedIn" />
      </FloatingLabel>

      <button className='btn'>Update</button>
      </div>
      </Collapse>
    </div>
  )
}

export default UserProfile
