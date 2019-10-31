import {ADD_MOVIE,FETCH_FAILED,FETCH_MOVIES,FETCH_SUCCEEDED} from './actionTypes';
export const fetchMoviesAction=()=>{
    return{
        type:FETCH_MOVIES,
    }
}
export const addMovieAction=(newMovie)=>{
    return{
        type:ADD_MOVIE,
        newMovie
    }
}
export const fetchSuccessAction=(receivedMovies)=>{
    return{
        type:FETCH_SUCCEEDED,
        receivedMovies
    }
}
export const fetchFailedAction=(error)=>{
    return{
        type:FETCH_FAILED,
        error
    }
}
