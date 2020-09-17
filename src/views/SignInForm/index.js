import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import 'styles/components/Sign.scss'
import { userEmailChange, userPasswordChange } from 'ducks/auth/actions'

const SignInForm = ({ handleSubmit, userEmailChange, userPasswordChange, userData }) => {
    const login = () => {
        console.log('click')
    }

    const handleEmailChange = (ev) => {
        ev.preventDefault()
        userEmailChange(ev.target.value)
    }

    const handlePasswordChange = (ev) => {
        ev.preventDefault()
        userPasswordChange(ev.target.value)
    }
    return (
        <section className='sign'>
            <form className='sign__form' onSubmit={handleSubmit}>
                <h1 className='sign__caption'>Sign in</h1>
                <Field value={userData.email}
                    name='email' component='input'
                    type='text'
                    placeholder='Email'
                    className='sign__input sign__input_email'
                    onChange={handleEmailChange} />
                <Field value={userData.password}
                    name='password'
                    component='input'
                    type='password'
                    placeholder='Password'
                    className='sign__input sign__input_pass'
                    onChange={handlePasswordChange} />
                <button type='submit' className='btn sign__submit' onClick={login}>
                    Sign In
                </button>
                <span style={{ color: 'white' }}>
                    No account yet? <Link to='sign-up'>Sign Up </Link>
                </span>
            </form>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.userData
    }
}

export default connect(mapStateToProps, { userEmailChange, userPasswordChange })(reduxForm({
    form: 'signIn'
})(SignInForm))
