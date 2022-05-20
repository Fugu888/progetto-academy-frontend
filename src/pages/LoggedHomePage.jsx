import React from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import MovieRow from "./MovieRow";
import './LoggedHomePage.css';
import { Container } from "react-bootstrap";
import MyBanner from "../components/MyBanner";

const LoggedHomePage = () => {
    return(
        <>
            <MyNavbar/>
            <Container className="loggedHomePageBody" fluid >
                <MovieRow/>
            </Container>
            <MyFooter/>
        </>
        
    );
    
}

export default LoggedHomePage;


