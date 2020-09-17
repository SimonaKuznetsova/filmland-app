import React from 'react'
import { Link } from 'react-router-dom'

export const SignIn = ({onHandleCloseMenu}) => {
    return (
        <Link to='/sign-in' onClick={onHandleCloseMenu} className='btn header__btn header__nav-link'>
                Sign in
        </Link>
    )
}