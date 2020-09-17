import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { NavIndicator } from 'views/NavIndicator'

export const Navigation = ({onHandleCloseMenu}) => {

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
        onHandleCloseMenu()
    }

    return (
        <nav className='header__nav'>
            <>
                <NavLink to='/' className='header__link header__link-home header__nav-link' onClick={onHandleClick}>
                    <span className='header__item'>Home</span>
                </NavLink>
                <NavLink to='/watchlist' className='header__link header__link-watchlist header__nav-link' onClick={onHandleClick}>
                    <span className='header__item'>Watchlist</span>
                </NavLink>
            </>
            {/* <div className='nav-indicator' style={{ width: state.indWidth, left: state.indLeft }}></div> */}
            <NavIndicator styleWidth={state.indWidth} styleLeft={state.indLeft} />
        </nav>
    )
}