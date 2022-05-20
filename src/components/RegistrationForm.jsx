import { React, useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import './MyLogin.css';


export default function RegistrationForm() {

    const [user, setUser] = useState({
        nome: "",
        cognome: "",
        username: "",
        email: "",
        telefono: 0,
        password: "",
        confirmPassword: ""
    })
    const [formState, setFormState] = useState("first-form");

    const handleSubmit = e => {
        e.preventDefault();
        user.confirmPassword !== user.password ? setFormState("second-form") : setFormState("success-card")
    }




    return (
        <>
            {/* PRIMO RENDER DEL FORM DI REGISTRAZIONE */}
            {formState === "first-form" && <Card className="myLoginBackground">
                <Form className="p-4" onSubmit={handleSubmit}>
                    <h2 style={{ color: "white" }}>Registrati</h2>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Nome" required onChange={(e) => setUser({ ...user, nome: e.target.value })} />
                                {console.log(user.nome)}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Cognome" required onChange={(e) => setUser({ ...user, cognome: e.target.value })} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Username" required onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Email" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" placeholder="Telefono" required onChange={(e) => setUser({ ...user, telefono: +(e.target.value) })} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Control type="password" placeholder="Password" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="password" placeholder="Conferma Password" required onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                    </Form.Group>

                    <Button className="mt-3" variant="primary" type="submit">Registrati</Button>
                </Form>
            </Card>}


            {/* SECONDO RENDER DEL FORM DI REGISTRAZIONE - PASSWORD NON VALIDATA */}
            {formState === "second-form" && <Card className="myLoginBackground">
                <Form className="p-4" onSubmit={handleSubmit}>
                    <h2 style={{ color: "white" }}>Registrati</h2>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder={user.nome} required onChange={(e) => setUser({ ...user, nome: e.target.value })} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder={user.cognome} required onChange={(e) => setUser({ ...user, cognome: e.target.value })} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder={user.username} required onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder={user.email} required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" placeholder={user.telefono} required onChange={(e) => setUser({ ...user, telefono: +(e.target.value) })} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Control type="password" placeholder="La password non coincide. Inserire nuovamente" className='plc-hld' required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type="password" placeholder="La password non coincide. Inserire nuovamente" className='plc-hld' required onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                    </Form.Group>

                    <Button className="mt-3" variant="primary" type="submit">Registrati</Button>
                </Form>
            </Card>}


            {/* RENDER DELLA CARD: REGISTRAZIONE AVVENUTA CON SUCCESSO */}
            {formState === "success-card" && <Card className="myLoginBackground text-align-center">
                <div style={{ fontSize: 10, color: 'white', textAlign: 'center' }} >
                    <h2  >
                        <strong >Registrazione avvenuta con successo!</strong>
                    </h2>
                </div>
            </Card>}
        </>
    )
}