import React from 'react'
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function ViewProject() {
  return (
    <div>
          <div className="row">
            <div className="col border shadow rounded-pill me-5 mt-5 p-5 d-flex justify-content-between">
              <h5>Project Topic</h5>
              <div>
              <FaLink className='fs-1 me-3'/>
              <FaGithub className='fs-1 me-3'/>
              <MdDelete className='fs-1 me-3'/>  
              <FaEdit className='fs-1'/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ViewProject
