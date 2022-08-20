import React, { useContext } from 'react'
import Link from "next/link"
const Register = () => {
    return (
<div className="flex justify-around">
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-start space-y-8">
                    <div className="flex flex-col">
                        <p className="mb-3">Continue transforming your study habits</p>
                        <h1 className="text-5xl font-bold">Sign in</h1>
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
                                Sign in
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-start space-y-8">
                    <div className="flex flex-col">
                        <p className="mb-3">Don&apos;t have an account?</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register