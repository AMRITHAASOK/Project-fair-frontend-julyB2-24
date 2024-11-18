import React from 'react'
import { FaSearch } from "react-icons/fa";
function Projects() {
  return (
    <>
    <div className="container p-5 m-5">
        <h1 className='text-center'>All Projects</h1>
        <div className='d-flex'>
        <input type="text" placeholder='Search By Technology' className='form-control my-3'/>
        <FaSearch className='fs-1 mt-4'  style={{marginLeft:'-60px'}}/>
        </div>
    </div>

    </>
  )
}

export default Projects
