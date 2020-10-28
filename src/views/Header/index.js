import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Navigation } from 'views/Navigation'
import { Tools } from 'views/Tools'
import 'styles/components/Header.scss'
import Logo from 'icons/Logo'
import Close from 'icons/Close'
import Open from 'icons/Open'
import classNames from 'classnames'
import { signOut } from 'ducks/auth/actions'

const Header = (props) => {
    const [open, setOpen] = useState(false)
    const onHandleOpenMenu = () => {
        setOpen(true)
    }
    const onHandleCloseMenu = () => {
        setOpen(false)
    }

    const onHandleSignOut = (e) => {
        e.preventDefault()
        props.signOut()
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

            <div className={classNames({
                'header__inner': true,
                'header__inner_hidden': !open
            })}>
                <Navigation onHandleCloseMenu={onHandleCloseMenu}/>
                <Tools onHandleCloseMenu={onHandleCloseMenu} 
                       onHandleSignOut={onHandleSignOut}
                       signedIn={props.signedIn}/>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.user
    }
}

export default connect(mapStateToProps, { signOut })(Header)