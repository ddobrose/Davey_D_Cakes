import React from 'react';
import {Button,Modal}  from 'react-bootstrap';
import { Link } from 'react-router-dom';




export const OrderAddModal = ({setShow,show}) => {
 
  

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Order Added to Cart!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your order has been successfully added to your cart.</Modal.Body>
        <Modal.Footer>
        <Link to={'/cart'}><Button variant="secondary" onClick={handleClose}>To Cart</Button></Link>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
  