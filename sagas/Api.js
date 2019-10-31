const urlGetMovies = 'http://5db9b400eddc81001495f0df.mockapi.io/api/movies';
function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:''

    });
    const movies = yield JSON.stringify(response);
    console.log(movies);
    return movies;
}
export const Api={
    getMoviesFromApi
}

