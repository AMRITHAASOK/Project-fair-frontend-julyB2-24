import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { FaLaptopCode } from "react-icons/fa";
function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <FaLaptopCode className='fs-1 ms-4 me-2'/>
            <span className='fs-3 fw-bolder'>Project Fair</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
