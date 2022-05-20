import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import './MyBanner.css';
//import MovieRow from "../pages/MovieRow";
//import movieRequests from '../movieRequests';

const MyBanner = () => {
    const base_url = "https://image.tmdb.org/t/p/original/"; 
    const[movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get("http://127.0.0.1:2000/movie/netflix");
            setMovie(request.data.results[Math.floor((Math.random() * request.data.results.length-1) + 0)]);
        }
        fetchData();
    }, []);

    //console.log(movie);


    if (movie.length !== 0) {
        return(
            <>
    
            <Container className="py-5" fluid style={{backgroundSize: "cover",backgroundImage: `url(${base_url+movie?.backdrop_path})` }}>
                <Row>
                    <Col sm={7}>
                    <Card className="myBannerCard py-4">
                        <Card.Body className="myBannerCard">
                           <h1><strong>{movie.name}</strong></h1>
                            <Card.Text className="my-4">
                                {movie.overview}
                            </Card.Text>
                            <Button className="my-4" variant="primary">Guarda il trailer</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>

            </>
        );    
    } else {
        return(
            <>
                <Spinner animation="grow" />
            </>
        );
    }

    

}

export default MyBanner; 