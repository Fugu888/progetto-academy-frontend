import React, {useState} from "react";
import {Card, Button} from 'react-bootstrap';
import './CustomCard.css';
import MyModal from "./MyModal";


const CustomCard = (props) => {




    /* const myClick = (e) => {
        console.log(e.currentTarget.dataset.idmovie); 
    } */


    return (
        <>
            <Card onClick={props.click} data-idmovie={props.idmovie} className="customCard" style={{ "width": '15rem' }}>
                <Card.Img className="customCardPoster" variant="top" src={props.image} />
                {/* <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body> */}
                {/* <MyModal></MyModal> */}
                {props.MyModal}
            </Card>
        </>
    );
}

export default CustomCard;