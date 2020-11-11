import React from 'react'
import Search from 'views/components/Search'
import {SignIn} from 'views/base/SignInBtn'

export const Tools = ({onHandleCloseMenu, onHandleSignOut, signedIn}) => {
    return (
        <div className='header__tools'>
            {/* <Search onHandleCloseMenu={onHandleCloseMenu}/> */}
            {signedIn ? <button onClick={onHandleSignOut}
                                className='btn header__btn header__nav-link'>
                                    Sign out
                        </button> 
                        :   <button onClick={onHandleCloseMenu}
                                className='btn header__btn header__nav-link'>
                                Sign in
                            </button> }
        </div>
    )
}