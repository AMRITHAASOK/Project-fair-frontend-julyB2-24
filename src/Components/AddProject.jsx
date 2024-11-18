import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineCloudUpload } from "react-icons/md";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <MdOutlineCloudUpload className='fs-1 mb-2 me-2' /> Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 ">
              <label>
                <input type="file" style={{display:'none'}}/>
                <img src="https://efc.web.unc.edu/wp-content/uploads/sites/2607/2016/05/project-management-copy.png" width={'350px'} className='ms-3' alt="" />
              </label>
              <p className='text-danger fw-bolder ms-2 mt-3'>* Only allowes following file type format .png, .jpeg, .jpg</p>
            </div>
            <div className="col-6">
              <FloatingLabel
                controlId="floatingInput"
                label="Title"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Project Title" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Language"  className="mb-3">
                <Form.Control type="text" placeholder="Language" />
              </FloatingLabel>
             
              <FloatingLabel
                controlId="floatingInput"
                label="Git hub"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Github" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Website"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Website" />
              </FloatingLabel>
             
              <FloatingLabel controlId="floatingTextarea2" label="Overview">
        <Form.Control
          as="textarea"
          placeholder="Overview"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
