
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
function ProjectCard() {

  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);

  return (
    <div>
       <MDBCard onClick={toggleOpen}>
      <MDBRipple rippleColor='light' rippleTag='div' className='shadow bg-image hover-overlay'>
        <MDBCardImage src='https://cdn3d.iconscout.com/3d/premium/thumb/web-designing-4027284-3328602.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='text-center fw-bolder'>Card title</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>

    <MDBModal tabIndex='-1' open={centredModal} onClose={() => setCentredModal(false)} >
        <MDBModalDialog centered 	size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Project Title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row">
                <div className="col-6">
                <MDBCardImage src='https://cdn3d.iconscout.com/3d/premium/thumb/web-designing-4027284-3328602.png' fluid alt='...' />
                </div>
                <div className="col-6">
                  <h3>Description</h3>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <h3>Technologies</h3>
                  <p>React,NodeJS</p>
                  <h3>View On</h3>
                  <MDBBtn color='secondary me-5' >
              <FaGithub className='fs-2 '/>
              </MDBBtn>
              <MDBBtn><FaLink className='fs-2'/></MDBBtn>
       
                </div>
               
              </div>
            </MDBModalBody>
            <MDBModalFooter>
                  </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default ProjectCard
