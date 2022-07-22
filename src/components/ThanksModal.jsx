import React from 'react';
import {Button,Modal}  from 'react-bootstrap';
import { Link } from 'react-router-dom';




export const ThanksModal = ({setShow,show}) => {
 
  

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We appreciate your purchase! Every penny you spend contributes to our plan for world domination! (of the cake industry)</Modal.Body>
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
  


