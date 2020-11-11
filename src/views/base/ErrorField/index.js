import React from 'react'
import 'styles/components/Sign.scss'

export const ErrorField = (props) => {
    const { input, type, placeholder, className, meta: { error, touched }} = props

    const errorText = error && touched && <span style={{ color: 'red' }}>{error}</span>

    return (
        <>
            <input {...input} placeholder={placeholder} type={type} className={className}/>
            {errorText}
        </>
    )
}