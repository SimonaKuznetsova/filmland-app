import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {Link} from 'react-router-dom'
import 'styles/components/Sign.scss'
import emailValidator from 'email-validator'
import {ErrorField} from 'views/ErrorField'

const SignUpForm = ({handleSubmit}) => {
    return (
        <section className='sign'>
            <form className='sign__form' onSubmit={handleSubmit}>
                <h1 className='sign__caption'>Sign Up</h1>

                <Field name='email' 
                    component={ErrorField} 
                    type='text' 
                    placeholder='Email' 
                    className='sign__input sign__input_email'/>

                <Field name='password' 
                    component={ErrorField} 
                    type='password' 
                    placeholder='Password' 
                    className='sign__input sign__input_pass'/>

                <button type='submit' className='btn sign__submit'>
                    Sign Up
                </button>

                <span style={{color: 'white'}}>
                Already have an account? <Link to='sign-in'>Sign In </Link>
                </span>
            </form>
        </section>
    )
}

const validate = ({email, password}) => {
    const errors = {}

    if (!email) errors.email = 'Email is required!'
    else if (!emailValidator.validate(email)) errors.email = 'Invalid email!'

    if (!password) errors.password = 'Password is required!'
    else if(password.length < 8) errors.password = 'To short!'

    return errors
}

export default reduxForm({
    form: 'signUp',
    validate
})(SignUpForm)