import React from 'react'
import Search from './node_modules/views/components/Search'
import {SignIn} from './node_modules/views/SignInBtn'

export const Tools = ({onHandleCloseMenu, onHandleSignOut, signedIn}) => {
    return (
        <div className='header__tools'>
            {/* <Search onHandleCloseMenu={onHandleCloseMenu}/> */}
            {signedIn ? <button onClick={onHandleSignOut}
                                className='btn header__btn header__nav-link'>
                                    Sign out
                        </button> 
                      : <SignIn onHandleCloseMenu={onHandleCloseMenu}/> }
        </div>
    )
}