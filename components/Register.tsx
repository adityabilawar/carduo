import React, { useContext } from 'react'
import Link from "next/link"
const Register = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-center space-y-8">
                    <h1 className="text-4xl">Register</h1>
                    <input type="text" placeholder="Username" />
                    <Link href="/lobby">
                        <button className='btn'>
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Register