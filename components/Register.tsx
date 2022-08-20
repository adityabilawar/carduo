import React, { useState } from 'react'
import { useRouter } from "next/router"

const Register = () => {

    // login states
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // register states
    const [regName, setRegName] = useState('');
    const [regPassword, setRegPassword] = useState('');

    // for sending user to dashboard
    const router = useRouter();

    const handleLogin = async(e) => {
        e.preventDefault();

        // using api to login user
        const res = await fetch(`/api/login`, {
            method: 'POST',
            body: JSON.stringify({name,password})
        });
        const data = await res.json();

        // error handler
        if(data.name) {
            // setting auth
            localStorage.setItem('auth', JSON.stringify({name,password}));
            router.push('/dashboard');
        } else {
            // send error message here
        }
    }

    const handleRegister = async(e) => {
        e.preventDefault();

        // use api to register user
        const res = await fetch(`/api/register`, {
            method: 'POST',
            body: JSON.stringify({regName,regPassword})
        });
        const data = await res.json();

        // error handler
        if(data.name) {
            // setting auth
            localStorage.setItem('auth', JSON.stringify({regName,regPassword}));
            router.push('/dashboard');
        } else {
            // send error message here
        }
    }

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
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <button className='btn text-white' onClick={handleLogin}>
                            Sign in
                        </button>
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
                            <input
                                type="text"
                                placeholder="Enter your username"
                                onChange={e => setRegName(e.target.value)}
                                value={regName}
                            />
                        </div>
                        <div>
                            <p>Password</p>
                            <input
                                type="text"
                                placeholder="Create your password"
                                onChange={e => setRegPassword(e.target.value)}
                                value={regPassword}
                            />
                        </div>
                        <button className='btn text-white' onClick={handleRegister}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register