import React from 'react'
import AddFavorites from 'icons/AddFavorites'
import { connect } from 'react-redux'
import {addToWatchlist} from 'ducks/watchlist/actions'

const AddFavBtn = ({id, addToWatchlist}) => {
    const onAddToWatchlist = () => {
        addToWatchlist(id)
    }

    return (
        <button className='fav fav_add' onClick={onAddToWatchlist}>
            <AddFavorites />
        </button>
    )
}

export default connect(null, {addToWatchlist})(AddFavBtn)
