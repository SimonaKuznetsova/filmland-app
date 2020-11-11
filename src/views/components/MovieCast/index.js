import React from 'react'

export const MovieCast = ({ actors }) => {
    // const actorsArr = actors.split(', ')
    // console.log(actorsArr)

    return (
        <div className='movie-page__tab'>
            <span className='movie-page__actors'>Actors</span>
            {/* <ul>
                {actorsArr.map(actor => {
                    return <li className='movie-page__actor'>{actor}</li>
                })}
            </ul> */}
        </div>
    )
}