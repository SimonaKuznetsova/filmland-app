import React from 'react'
import Search from 'views/Search'
import {SignIn} from 'views/SignInBtn'

export const Tools = ({onHandleCloseMenu}) => {
    return (
        <div className='header__tools'>
            <Search onHandleCloseMenu={onHandleCloseMenu}/>
            <SignIn onHandleCloseMenu={onHandleCloseMenu}/>
        </div>
    )
}