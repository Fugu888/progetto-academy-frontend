import React, { useState } from "react";
import axios from 'axios';
import CustomCard from "./CustomCard";
import { Row, Col, Card, Button, Form, Container } from 'react-bootstrap';
import MyModal from "./MyModal";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import './SearchMovie.css';

const SearchMovie = () => {

    const url = "http://localhost:2000/search_by_title";
    const base_url_img = "https://image.tmdb.org/t/p/original/";
    const API_KEY = "dba3a129d87a60472cfb5bb116de09b7";

    const [data, setData] = useState({ titolo: "" });
    const [results, setResults] = useState([]);
    const [isFound, setIsFound] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");
    const [banner, setBanner] = useState("");

    const handle = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(data.titolo)
        axios.post(url, {
            titolo: data.titolo
        })
        .then(res => {
            console.log(res.data);
            setResults(res.data);
            setIsFound(true);
            console.log(isFound);
        })

    }


    const myClick = (e) => {
        let idMovie = Number(e.currentTarget.dataset.idmovie);
        let trailerUrl = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=dba3a129d87a60472cfb5bb116de09b7&language=en-US`;
        let clickedFilm = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}&language=en-US;`
   
        axios.get(trailerUrl)
            .then(function (response) {
                // handle success
                let completetrailerKey = response.data.results[0].key;
                setTrailerKey(completetrailerKey);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {

            });


        axios.get(clickedFilm)
            .then(function (response) {
                setBanner(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {

            });

    }

    return (
        <>

            <MyNavbar />
            <Container style={{"min-height": "500px"}} fluid className="searchMovieContainer ">
                <Row className="py-5 text-center">
                    <Col sm={{ span: 6, offset: 3 }}>
                        <h1><strong>Film, Serie TV e tanto altro.</strong></h1>
                        <h2><strong>Cerca il tuo film</strong></h2>
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={handle} id="titolo" placeholder="Cerca Titolo" value={data.titolo} type="text"/>
                            </Form.Group>
                            <Button id="button-search" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

                {banner !== "" ?
                    <Container fluid className=" mb-4">
                        <Row style={{ "min-height": "500px" }}>
                            <Col sm={12} style={{ backgroundSize: "cover", backgroundImage: `url(${base_url_img + banner?.backdrop_path})` }}>
                                <Card className="myBannerCard py-4">
                                    <Card.Body className="myBannerCard">
                                        <h1><strong>{banner.original_title}</strong></h1>
                                        <Card.Text className="my-4">
                                            {banner.overview}
                                        </Card.Text>
                                        <MyModal iframe={`https://www.youtube.com/embed/${trailerKey}`}></MyModal>
                                    </Card.Body>

                                </Card>
                            </Col>
                        </Row>
                    </Container> : null}

                <Container fluid className="overflow-auto">
                    <Row style={{ "scrollbar-width": "none" }} className="flex-nowrap noYscroll">
                        {results.map((data, index) =>
                            data.poster_path !== null ? <Col key={index}><CustomCard click={myClick} idmovie={data.id} image={base_url_img + data.poster_path} /></Col> : null
                        )}
                    </Row>
                </Container>
            </Container>
        <MyFooter/>                        
        </>
    );
}

export default SearchMovie;


