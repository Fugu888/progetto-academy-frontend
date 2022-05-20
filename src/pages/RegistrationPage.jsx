import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegistrationForm from "../components/RegistrationForm";
import MyFooter from "../components/MyFooter";
import './LoginPage.css';
import MyNavbar from "../components/MyNavbar";

const RegistrationPage = () => {
    return (
        <>
        <MyNavbar/>
        <Container fluid className="loginPageContainer">
            <Row className="py-5">
                <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} xl={{ span: 4, offset: 4 }} xxl={{ span: 4, offset: 4 }}>
                    <RegistrationForm/>
                </Col>
            </Row>
        </Container>
        <MyFooter/>
        </>
    );
}

export default RegistrationPage;