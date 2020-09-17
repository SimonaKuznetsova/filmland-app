import React, {useState} from 'react'
import { Navigation } from 'views/Navigation'
import { Tools } from 'views/Tools'
import 'styles/components/Header.scss'
import Logo from 'icons/Logo'
import Close from 'icons/Close'
import Open from 'icons/Open'
import DeleteFavBtn from '../DeleteFavBtn'
import DeleteFavorites from 'icons/DeleteFavorites'

export const Header = () => {
    const [open, setOpen] = useState(false)
    const onHandleOpenMenu = () => {
        setOpen(true)
    } 
    const onHandleCloseMenu = () => {
        setOpen(false)
    }

    return (
        <header className='header'>
            <div className='header__top'>
                <div className='logo'>
                    <span className='logo__text logo__text_first'>filmla</span>
                    <span className='logo__text logo__text_middle'>n</span>
                    <Logo />
                    <span className='logo__text logo__text_last'>d</span>
                </div>
                {!open && <Open onHandleOpenMenu={onHandleOpenMenu}/>}
                {open && <Close onHandleCloseMenu={onHandleCloseMenu}/>}
            </div>


            <div className='header__inner'>
                <Navigation onHandleCloseMenu={onHandleCloseMenu}/>
                <Tools onHandleCloseMenu={onHandleCloseMenu}/>
            </div>
            <DeleteFavorites />
        </header>
    )
}