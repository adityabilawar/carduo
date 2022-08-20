import React, { useState } from 'react'
import Link from "next/link"

const URL = 'https://carduo.vercel.app/';

const Login = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();

        const res = await fetch(`${URL}/api/login`, {
            method: 'POST',
            body: JSON.stringify({

            })
        })
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-start space-y-8">
                    <div className="flex flex-col">
                        <p className="mb-3">Transform your study habits</p>
                        <h1 className="text-5xl font-bold">Sign in</h1>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <div>
                            <p>Username</p>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div>
                            <p>Password</p>
                            <input
                                type="text"
                                placeholder="Enter your password"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <Link href="/dashboard">
                            <button className='btn text-white' onClick={handleLogin}>
                                Sign in
                            </button>
                        </Link>
                        <Link href="/register">
                            <p>New user? <span className="cursor-pointer text-[#F43A3B]">Register here</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login