import React from 'react'
import DeleteFavorites from 'icons/DeleteFavorites'
import { connect } from 'react-redux'
import {deleteFromWatchlist} from 'ducks/watchlist/actions'

const DeleteFavBtn = ({id, deleteFromWatchlist}) => {
    const onDeleteFromWatchlist = () => {
        deleteFromWatchlist(id)
    }

    return (
        <button className='love' onClick={onDeleteFromWatchlist}>
            <DeleteFavorites />
        </button>
    )
}

export default connect(null, {deleteFromWatchlist})(DeleteFavBtn)