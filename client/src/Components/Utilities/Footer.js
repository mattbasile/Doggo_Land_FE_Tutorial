import React from 'react'

export default function Footer() {
    return (
        <footer className="flex h-24 justify-center items-center body-font bg-blue-700 text-white relative bottom-0 w-full">
            <h1 className="text-xl font-normal title-font tracking-wide">Doggo Land</h1>
            <p className="text-xl font-normal title-font tracking-wide ml-2" >
                ©
            </p>
            <p className="text-xl font-normal title-font tracking-wide ml-1">{new Date().getFullYear()}</p>
        </footer>
    )
}