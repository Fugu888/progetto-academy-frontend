import React from 'react';
import './Landing.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Landing() {
    return (
        <>
           <Container fluid className='landing-first-section p-5'>
               <Row className='text-center'>
                   <Col xl={{ span: 8, offset: 2 }} xxl={{ span: 8, offset: 2 }}>
                        <h1 className='pt-5'><strong>Film, serie TV e tanto altro.</strong></h1>
                        <h1><strong>Senza Limiti.</strong></h1>
                        <h3><strong>Guarda ciò che vuoi ovunque. Disdici quando vuoi.</strong></h3>
                        <h4 className='pb-5'><strong>Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</strong></h4>
                   </Col>
               </Row>
           </Container>

           <Container fluid className='landing-second-section p-5'>
               <Row>
                   <Col xl={6} xxl={6}>
                        <h1><strong>Goditi Netflix sulla tua TV.</strong></h1>
                        <h3>Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.</h3>     
                   </Col>
                   <Col xl={6} xxl={6}>
                        <video autoplay="" playsinline="" muted="" loop="true"><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></source></video>
                   </Col>
               </Row>
           </Container>

           <Container fluid className='landing-third-section p-5'>
                <Row>
                   <Col xl={6} xxl={6}>
                        
                   </Col>
                   <Col  xl={6} xxl={6}>
                        <h1><strong>Scarica le tue serie da guardare offline.</strong></h1>
                        <h3>Salva facilmente i tuoi preferiti così avrai sempre qualcosa da guardare.</h3>     
                   </Col>
               </Row>
           </Container>

           <Container fluid className='landing-fourth-section p-5'>
                <Row>
                   <Col xl={6} xxl={6}>
                        <h1><strong>Guarda Netflix ovunque.</strong></h1>
                        <h3>Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti e senza spendere di più.</h3>
                   </Col>
                   <Col xl={6} xxl={6}>
                        <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="true"><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"></source></video>       
                   </Col>
               </Row>
           </Container>

           <Container fluid className='landing-fifth-section p-5'>
                <Row>
                   <Col xl={6} xxl={6}>
                        
                   </Col>
                   <Col xl={6} xxl={6}>
                        <h1><strong>Crea profili per i bambini.</strong></h1>
                        <h3>I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.</h3>      
                   </Col>
               </Row>
           </Container>
        </>
    );
}

export default Landing

