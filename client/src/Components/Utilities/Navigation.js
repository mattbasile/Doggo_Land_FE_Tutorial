import React from 'react'
import {Link} from "react-router-dom";


export default function Navigation() {
    return (
        <nav className="flex justify-around items-center w-100 h-24 bg-blue-700 text-xl text-white font-semibold body-font">
            <Link className="text-5xl title-font font-normal" to="/">Doggo Land</Link>
            <div className="flex w-2/5 justify-around">
                <Link className="hover:underline" to="/#dogs">Dogs</Link>
                <Link className="hover:underline" to="/#kennels">Kennels</Link>
                <Link className="hover:underline" to="/#kennels">About</Link>
            </div>
            <Link className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700" to="/login">Admin</Link>
        </nav>
    )
}
