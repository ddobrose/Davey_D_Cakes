import React from 'react';
import {Button,Modal}  from 'react-bootstrap';
import { Link } from 'react-router-dom';




export const GuestRegisterModal = ({setShow,show}) => {
 
  

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully customized your profile!</Modal.Body>
        <Modal.Footer>
        <Link to={'/'}><Button variant="secondary" onClick={handleClose}>Close</Button></Link>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}