import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import 'styles/components/Sign.scss'

const SignInForm = ({handleSubmit}) => {

    return (
        <section className='sign'>
            <form className='sign__form' onSubmit={handleSubmit}>
                <h1 className='sign__caption'>Sign in</h1>
                <Field name='email' component='input'
                    type='text'
                    placeholder='Email'
                    className='sign__input sign__input_email'/>
                <Field name='password'
                    component='input'
                    type='password'
                    placeholder='Password'
                    className='sign__input sign__input_pass' />
                <button type='submit' className='btn sign__submit'>
                    Sign In
                </button>
                <span className='sign__span' style={{ color: 'white' }}>
                    No account yet? <Link to='sign-up'>Sign Up </Link>
                </span>
            </form>
        </section>
    )
}

export default reduxForm({
    form: 'signIn'
})(SignInForm)