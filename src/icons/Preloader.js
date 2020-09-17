import React from 'react'
import 'styles/components/Preloader.scss'

export const Preloader = () => {
    return (
        <svg className='preloader'>
            <g>
                <path d="M 50,100 A 1,1 0 0 1 50,0" />
            </g>
            <g>
                <path d="M 50,75 A 1,1 0 0 0 50,-25" />
            </g>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop stop-color="rgb(101, 115, 255)" offset="0%" />
                    <stop stop-color="rgb(111, 114, 247)" offset="9%" />
                    <stop stop-color="rgb(120, 114, 239)" offset="18%" />
                    <stop stop-color="rgb(130, 113, 231)" offset="27%" />
                    <stop stop-color="rgb(139, 112, 223)" offset="36%" />
                    <stop stop-color="rgb(149, 111, 215)" offset="45%" />
                    <stop stop-color="rgb(158, 111, 208)" offset="54%" />
                    <stop stop-color="rgb(168, 110, 200)" offset="63%" />
                    <stop stop-color="rgb(177, 109, 192)" offset="72%" />
                    <stop stop-color="rgb(187, 108, 184)" offset="81%" />
                    <stop stop-color="rgb(196, 108, 176)" offset="90%" />
                    <stop stop-color="rgb(206, 107, 168)" offset="100%" />
                </linearGradient>
            </defs>
        </svg>
    )
}