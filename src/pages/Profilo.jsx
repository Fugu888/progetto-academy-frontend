import React , { useState,useEffect } from 'react';
import { MDBIcon, MDBCardBody, MDBCardTitle, MDBBtn  } from 'mdb-react-ui-kit';
import { Container,Row,Col } from 'react-bootstrap';
import './Profilo.css'

const Username = (props) => {
    /* const [username, setUsername]= useState(""); */
    return(
        <p>{props.username}</p>
    );   
}

const Input = (props) => {
  return(
        <div> 
            <input  className='text-center size cardSfondo' onChange={props.onChange} placeholder="username"></input>
              {" "}
            <MDBBtn color='none' floating tag='a'type="submit" onClick={props.onClick}>
                <MDBIcon fas icon="pencil-alt white" />
            </MDBBtn> 
        </div>
  )
}
export default function Profilo() {
    const [username1, setUsername1]= useState("Laura");
    const [profilo1, setProfilo1] = useState(false);
    const [username2, setUsername2]= useState("Luca");
    const [profilo2, setProfilo2] = useState(false);
    const [username3, setUsername3]= useState("Karim");
    const [profilo3, setProfilo3] = useState(false);
    const [username4, setUsername4]= useState("Francesco");
    const [profilo4, setProfilo4] = useState(false);

    const uno = () => {
    setProfilo1(current => !current);
    }
    const due = () => {
    setProfilo2(current => !current);
    }
    const tre = () => {
    setProfilo3(current => !current);
    }
    const quattro = () => {
    setProfilo4(current => !current);
    }

    useEffect(() => {

    }, [profilo1, profilo2, profilo3, profilo4]);

 
    return (
        <div className="Dashboard-header">
            <Container className='justify-content-md-center'>
                <Row>
                    <Col>
                        <div className='text-center Dashboard-header-text margine'>Chi vuole vedere Netflix?</div> 
                    </Col>
                </Row>
            
                <Row >
                    <Col className='text-center'>
                        <img className='image' style={{height:'160px', width:'150px'}}src='https://i.pinimg.com/564x/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.jpg' position='top' alt='...' ></img>
                        <MDBCardBody className='cardSfondo'>

                            {!profilo1 &&   <MDBCardTitle className='text-center size'><Username username={username1} />
                                                {" "}<MDBBtn color='none' floating tag='a'type="submit" onClick={uno}> <MDBIcon fas icon="pencil-alt white" /></MDBBtn>
                                            </MDBCardTitle> }
                            {profilo1 && <Input onChange={e=>new setUsername1(e.target.value)} onClick={uno} />  }                         
                        </MDBCardBody>
                    </Col> 

                    <Col className='text-center'>
                        <img className='image' style={{height:'160px', width:'150px'}}src='https://i.pinimg.com/564x/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c.jpg' position='top' alt='...' ></img>
                        <MDBCardBody className='cardSfondo'>
                            {!profilo2 &&   <MDBCardTitle className='text-center size'><Username username={username2} />
                                                {" "}<MDBBtn color='none' floating tag='a'type="submit" onClick={due}> <MDBIcon fas icon="pencil-alt white" /></MDBBtn>
                                            </MDBCardTitle> }
                            {profilo2 && <Input onChange={e=>new setUsername2(e.target.value)} onClick={due} />  } 
                        </MDBCardBody>
                    </Col> 

                    <Col className='text-center'>
                        <img className='image' style={{height:'160px', width:'150px'}}src='https://i.pinimg.com/564x/34/62/d2/3462d27440aa255b1c314ff16f4032b4.jpg' position='top' alt='...' ></img>
                         <MDBCardBody className='cardSfondo'>
                            {!profilo3 &&   <MDBCardTitle className='text-center size'><Username username={username3} />
                                                {" "}<MDBBtn color='none' floating tag='a'type="submit" onClick={tre}> <MDBIcon fas icon="pencil-alt white" /></MDBBtn>
                                            </MDBCardTitle> }
                            {profilo3 && <Input onChange={e=>new setUsername3(e.target.value)} onClick={tre} />  } 
                        </MDBCardBody>
                    </Col>

                    <Col className='text-center'>
                        <img className='image' style={{height:'160px', width:'150px'}}src='https://i.pinimg.com/564x/b3/bb/f6/b3bbf6285f20622e5dae9a31f0afe8c6.jpg' position='top' alt='...' ></img>
                        <MDBCardBody className='cardSfondo'>
                            {!profilo4 &&   <MDBCardTitle className='text-center size'><Username username={username4} />
                                                {" "}<MDBBtn color='none' floating tag='a'type="submit" onClick={quattro}> <MDBIcon fas icon="pencil-alt white" /></MDBBtn>
                                            </MDBCardTitle> }
                            {profilo4 && <Input onChange={e=>new setUsername4(e.target.value)} onClick={quattro} />}                              
                        </MDBCardBody>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}