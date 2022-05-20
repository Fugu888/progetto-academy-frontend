import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Col, Card, Container, Spinner} from 'react-bootstrap';
import CustomCard from "../components/CustomCard";
import endpointObj from "../movieRequests"; 
import './MovieRow.css';
import MyModal from "../components/MyModal";

const MovieRow = () => {

    const base_url_img = "https://image.tmdb.org/t/p/original/"; 
    const API_KEY = "dba3a129d87a60472cfb5bb116de09b7";

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [docuMovies, setDocuMovies] = useState([]);
    const [trailerKey, setTrailerKey] = useState("");
    const [banner, setBanner] = useState("");

    useEffect(() => {

        //Fetch dei Top Rated
        axios.get(`http://127.0.0.1:2000${endpointObj.fetchTopRated}`)
        .then(function (response) {
            console.log(response);
            setTopRatedMovies(response.data.results); 
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        });


        //Fetch film azione  
        axios.get(`http://127.0.0.1:2000${endpointObj.fetchActionMovies}`)
        .then(function (response) {
            console.log(response);
            setActionMovies(response.data.results); 
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        });
        

        //Fetch film horror 
        axios.get(`http://127.0.0.1:2000${endpointObj.fetchHorrorMovies}`)
        .then(function (response) {
            console.log(response);
            setHorrorMovies(response.data.results); 
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        });   


        //Fetch film commedia 
        axios.get(`http://127.0.0.1:2000${endpointObj.fetchComedyMovies}`)
        .then(function (response) {
            console.log(response);
            setComedyMovies(response.data.results); 
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        });
        

        //Fetch film docu 
        axios.get(`http://127.0.0.1:2000${endpointObj.fetchDocumentaries}`)
        .then(function (response) {
            console.log(response);
            setDocuMovies(response.data.results); 
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        }); 

    }, [])


    const myClick = (e) => {
        let idMovie = Number(e.currentTarget.dataset.idmovie);
        let trailerUrl = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=dba3a129d87a60472cfb5bb116de09b7&language=en-US`;
        let clickedFilm = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}&language=en-US;`
     
        axios.get(trailerUrl)
        .then(function (response) {
            var completetrailerKey = response.data.results[0].key;
            console.log(completetrailerKey);
            setTrailerKey(completetrailerKey);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        });


        axios.get(clickedFilm)
        .then(function (response) {
            setBanner(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        });

    } 

    if (topRatedMovies.length !== 0) {
        return(
            <>
            
                { banner !== "" ?
                    <Container fluid className=" mb-4">
                    <Row style={{"min-height": "500px"}}>
                        <Col sm={12} style={{backgroundSize: "cover",backgroundImage: `url(${base_url_img+banner?.backdrop_path})`}}>
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
                </Container> : null }   


                    <Container fluid className="overflow-auto">
                        <h2>Top Rated</h2>
                        <Row className="flex-nowrap noYscroll">
                            {topRatedMovies.map((movie,index) => 
                                <Col key={index}><CustomCard click={myClick} idmovie={movie.id} image={base_url_img+movie.poster_path}></CustomCard></Col>
                            )}
                        </Row>
                    </Container>

                    <Container fluid className="overflow-auto">
                        <h2>Azione</h2>
                        <Row className="flex-nowrap noYscroll">
                            {actionMovies.map((movie,index) => 
                                <Col key={index}><CustomCard click={myClick} idmovie={movie.id} image={base_url_img+movie.poster_path}></CustomCard></Col>
                            )}
                        </Row>
                    </Container>        

                    <Container fluid className="overflow-auto">
                        <h2>Horror</h2>
                        <Row className="flex-nowrap noYscroll">
                            {horrorMovies.map((movie,index) => 
                                <Col key={index}><CustomCard click={myClick} idmovie={movie.id} image={base_url_img+movie.poster_path}></CustomCard></Col>
                            )}
                        </Row>
                    </Container>

                    <Container fluid className="overflow-auto">
                        <h2>Commedia</h2>
                        <Row className="flex-nowrap noYscroll">
                            {comedyMovies.map((movie,index) => 
                                <Col key={index}><CustomCard click={myClick} idmovie={movie.id} image={base_url_img+movie.poster_path}></CustomCard></Col>
                            )}
                        </Row>
                    </Container>

                    <Container fluid className="overflow-auto">
                        <h2>Documentari</h2>
                        <Row className="flex-nowrap noYscroll">
                            {docuMovies.map((movie,index) => 
                                <Col key={index}><CustomCard click={myClick} idmovie={movie.id} image={base_url_img+movie.poster_path}></CustomCard></Col>
                            )}
                        </Row>
                    </Container>              

            </>
        );
    } else {
        return(
            <Spinner animation="grow" />
        );
    }
}

export default MovieRow;





