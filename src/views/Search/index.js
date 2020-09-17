import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { changeSearchTitle, getFilms } from 'ducks/movieList/actions'
import SearchIcon from '../../icons/Search'

const Search = ({onHandleCloseMenu, getFilms, changeSearchTitle}) => {

    const [title, setTitle] = useState('')
    const [search, setSearch] = useState(true)

    const onValueChange = (ev) => {
        setTitle(ev.currentTarget.value)
    }

    const onSearchFilmsClick = () => {
        getFilms(title)
        changeSearchTitle(title)
        onHandleCloseMenu()
    }

    const onHandleSearch = () => {
        setSearch(true)
    }
    

    return (
        <>
            {/* {!search && <span className='search__span header__nav-link' onClick={onHandleSearch}>Search</span>}
            {search && <div className='search__inner header__nav-link'>
                <input type='text'
                    placeholder='What do you want to see?'
                    onChange={onValueChange}
                    className='search__input' />

                <NavLink to='/'
                    className='search__btn'
                    onClick={onSearchFilmsClick}>
                    <SearchIcon />
                </NavLink>
            </div>} */}
            {/* <div className='search__inner header__nav-link'>
                <input type='text'
                    placeholder='What do you want to see?'
                    onChange={onValueChange}
                    className='search__input' />

                <NavLink to='/'
                    className='search__btn'
                    onClick={onSearchFilmsClick}>
                    <SearchIcon />
                </NavLink>
            </div> */}
            {!search && <span className='search__span header__nav-link' onClick={onHandleSearch}>Search</span>}
            {search && <div className='search__inner header__nav-link'>
                <input type='text'
                    placeholder='What do you want to see?'
                    onChange={onValueChange}
                    className='search__input' />

                <NavLink to='/'
                    className='search__btn'
                    onClick={onSearchFilmsClick}>
                    <SearchIcon />
                </NavLink>
            </div>}

        </>
    )

}

export default connect(null, {
    getFilms,
    changeSearchTitle
})(Search)