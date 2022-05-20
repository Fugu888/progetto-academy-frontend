import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import './MyModal.css';

const MyModal = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Riproduci
            </Button>

            <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="400" src={props.iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>

        </>
    );

}

export default MyModal


