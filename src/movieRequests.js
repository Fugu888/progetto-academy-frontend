const API_KEY = "dba3a129d87a60472cfb5bb116de09b7";

const endpointObj = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflix: "movie/netflix",
    fetchTopRated: "/movie/top-rated",
    fetchActionMovies: "/movie/action",
    fetchComedyMovies: "/movie/comedy",
    fetchHorrorMovies: "/movie/horror",
    fetchRomanceMovies: "movie/romances",
    fetchDocumentaries: "/movie/docu",
    fetchAnimation: "/movie/animation"
}

export default endpointObj;