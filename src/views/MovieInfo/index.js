import React, { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { getFilm } from 'ducks/movie/actions'
import { connect } from 'react-redux'
import AddFavBtn from 'views/AddFavBtn'
import DeleteFavBtn from 'views/DeleteFavBtn'
import { MovieDescription } from 'views/MovieDescription'
import { MovieComments } from 'views/MovieComments'
import { MovieCast } from 'views/MovieCast'
import { NavIndicator } from 'views/NavIndicator'
import 'styles/components/MovieInfo.scss'


const MoreInfoMovie = (props) => {

    useEffect(() => {
        getFilm(filmID)
    }, [])

    const [state, setState] = useState({
        indWidth: '0px',
        indLeft: '0px'
    })

    const moveInd = (el) => {
        setState({
            indWidth: el.offsetWidth,
            indLeft: el.offsetLeft
        })
    }

    const onHandleClick = (ev) => {
        moveInd(ev.target)
        console.log('click')
    }

    const { Title, Year, Genre, Actors, Type, Plot, Poster, imdbRating, Runtime, Country } = props.movie
    const { favorites, getFilm } = props
    const filmID = props.match.params.filmID

    return <div className='movie-page'>
        <div className='movie-page__poster'>
            <img src={Poster} alt='Poster' />
        </div>

        <div className='movie-page__info'>
            <span className='movie-page__rating'>
                <p>imbdb {imdbRating}</p>
            </span>

            <h1 className='movie-page__title'>
                {Title}
            </h1>

            <div className='movie-page__btns'>
                <Link to={`/movie/${filmID}`} className='btn btn_watch'>Watch</Link>
                {favorites.includes(filmID)
                    ? <DeleteFavBtn id={filmID} />
                    : <AddFavBtn id={filmID} />}
            </div>
        </div>

        <div className='movie-page__widgets'>
            <nav className='movie-page__nav'>
                <Link to={`/movie/${filmID}/description`}
                    onClick={onHandleClick}
                    className='movie-page__widget'>
                    Description
                </Link>
                <Link to={`/movie/${filmID}/cast`}
                    onClick={onHandleClick}
                    className='movie-page__widget'>
                    Cast
                </Link>
                <Link to={`/movie/${filmID}/comments`}
                    onClick={onHandleClick}
                    className='movie-page__widget'>
                    Reviews
                </Link>

                <NavIndicator styleWidth={state.indWidth} styleLeft={state.indLeft} />
            </nav>

            <div className='movie-page__tabs'>
                <Switch>
                    <Route path={`/movie/${filmID}/description`}
                        render={() => <MovieDescription year={Year}
                                                        genre={Genre} 
                                                        runtime={Runtime}
                                                        plot={Plot}
                                                        country={Country}
                                                        type={Type}/>}
                        extends />

                    <Route path={`/movie/${filmID}/cast`}
                        render={() => <MovieCast actors={Actors}/>}
                        extends />

                    <Route path={`/movie/${filmID}/comments`}
                        render={() => <MovieComments />}
                        extends />
                </Switch>
            </div>
        </div>

    </div>
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieModule.movie,
        favorites: state.watchlistModule.favorites
    }
}

export default connect(mapStateToProps, { getFilm })(MoreInfoMovie)