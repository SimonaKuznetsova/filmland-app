import React, { useEffect } from 'react'
import { MovieList } from 'views/MovieList'
import {Preloader} from 'icons/Preloader'
import { connect } from 'react-redux'
import { getFavoritesMovies } from 'ducks/watchlist/actions'

const Watchlist = (props) => {

    useEffect(() => {
        getFavoritesMovies(favorites)
    }, [])

    const { favoritesMovies, loading, favorites, getFavoritesMovies } = props

    if (loading) return <Preloader />

    if (!favoritesMovies.length) return null

    return (
        <MovieList listName="watchlist" films={favoritesMovies} loading={loading} />
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: state.watchlistModule.favorites,
        favoritesMovies: state.watchlistModule.favoritesMovies,
        loading: state.watchlistModule.loading
    }
}

export default connect(mapStateToProps, { getFavoritesMovies })(Watchlist)