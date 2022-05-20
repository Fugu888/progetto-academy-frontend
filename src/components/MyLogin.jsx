import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './MyLogin.css';

export default function MyLogin() {
    return (
        <>
            <Card className="myLoginBackground">
                <Form className="p-4">
                    <h2>Accedi</h2>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="title"></Form.Label>
                        <Form.Control type="text" id="title" placeholder="Inserisci un indirizzo email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="image"></Form.Label>
                        <Form.Control type="password" required id="image" placeholder="Inserisci la password" />
                    </Form.Group>

                    <Button className="my-3" variant="primary" type="submit">Accedi</Button>

                    {/* <p>Non hai un profilo?<strong> <a href=''>Registrati!</a></strong></p> */}
                    <p>Non hai un profilo?<strong> <Link style={{"textDecoration":"none"}} to="/registration">Registrati</Link></strong></p>
                </Form>
            </Card>
        </>
    );
}

