import {connect} from 'react-redux';
import MovieComponents from '../components/MovieComponents';
import {addMovieAction, fetchFailedAction, fetchMoviesAction, fetchSuccessAction} from '../actions';

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers,

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction());
        },
        onAddMovie: (newMovie) => {
            dispatch(addMovieAction(newMovie));
        },
    };
};
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponents);
export default MovieContainer;

