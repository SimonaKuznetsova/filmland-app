import React from 'react'
import 'styles/components/MovieCard.scss'
import 'styles/components/FavBtn.scss'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Poster from 'icons/Poster'
import AddFavBtn from 'views/AddFavBtn'
import DeleteFavBtn from 'views/DeleteFavBtn'

const MovieCard = (props) => {

    const { title, year, type, poster, id, favorites } = props
    return (
       <>
            <NavLink to={`/movie/${id}`} className='movie-card__link'>
                <div className='movie-card__poster'>
                    {poster.length > 3 ? <img src={poster} alt='Movie poster' /> : <Poster />}
                </div>
                <h4 className='movie-card__title'>{title}</h4>
            </NavLink>

            <div className='movie-card__text'>
                <span>{year}, {type}</span>
                {favorites.includes(id) ? <DeleteFavBtn id={id} /> : <AddFavBtn id={id}/> }
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        favorites: state.watchlistModule.favorites
    }
}

export default connect(mapStateToProps)(MovieCard)