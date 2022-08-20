import React, { useContext } from 'react'
import Link from "next/link"
const Register = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-start space-y-8">
                    <div className="flex flex-col">
                        <p className="mb-3">Transform your study habits</p>
                        <h1 className="text-5xl font-bold">Register</h1>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <div>
                            <p>Username</p>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="text" placeholder="Username" />
                        </div>
                        <Link href="/dashboard">
                            <button className='btn text-white'>
                                Register
                            </button>
                        </Link>
                        <Link href="/login">
                            <p>Already have an account? <span className="cursor-pointer text-[#F43A3B]">Sign in here</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register