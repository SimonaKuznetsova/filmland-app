import React from 'react'
import { connect } from 'react-redux'
import MovieCard from 'views/MovieCard'
import 'styles/components/MovieList.scss'
import {Preloader} from 'icons/Preloader'
import { changeLoadMoreCount, loadMoreMovies } from 'ducks/movieList/actions'

export const MovieList = (props) => {

    const onLoadMoreClick = () => {
        props.loadMoreMovies(props.searchTitle)
    }
    const { listName = "movielist", films, loading, loadMoreMovies } = props

    if (loading) return <Preloader />

    if (!films) return <h2 className='message'>No movies found :(</h2>

    if (films.length) return (
        <>
            <ul className='home__list'>
                {films.map(m => <li key={`${listName}_${m.imdbID}`} className='movie-card'>
                    <MovieCard title={m.Title}
                        year={m.Year}
                        poster={m.Poster}
                        type={m.Type}
                        id={m.imdbID} />
                </li>)}
            </ul>

            {loadMoreMovies && <a onClick={onLoadMoreClick} className='btn btn_home'>Load more</a>}
        </>
    )

    return null
}

const mapStateToProps = (state) => {
    return {
        films: state.movieList.foundMovies,
        loading: state.movieList.loading,
        searchTitle: state.movieList.searchTitle
    }
}

export default connect(mapStateToProps, { changeLoadMoreCount, loadMoreMovies })(MovieList)