import React from 'react'

export const MovieDescription = ({ year, genre, country, plot, runtime, type }) => {
    return (
        <div className='movie-page__tab'>
            <span className='movie-page__year'>
                {year}, {country}
            </span>

            <div className='movie-page__genre'>
                <span>{runtime}</span>
                <span>{genre}</span>
            </div>

            <p className='movie-page__plot'>{plot}</p>
        </div>
    )
}