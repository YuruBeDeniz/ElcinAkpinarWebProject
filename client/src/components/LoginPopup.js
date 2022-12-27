import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/auth';

export default function LoginPopup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, verifyStoredToken } = useContext(AuthContext);

    const handleName = e => setName(e.target.value);
    const handlePassword = e => setPassword(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const requestBody = {name, password};
        axios.post('/api/auth/login', requestBody)
          .then(response => {
            const token = response.data.authToken;

            storeToken(token);
            verifyStoredToken(token)
                .then(() => {
                    navigate('/')
                })
          })
          .catch(err => {
            const errorDescription = err.response.data.message;
            setErrorMessage(errorDescription)
          })
    }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-lg lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-bg-gray-900">
                   Login
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={handleName}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePassword}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Login
                        </button>
                    </div>
                </form>

                {errorMessage && <h5>{errorMessage}</h5>}

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to="/elcin-signup"
                        className="font-medium text-bg-gray-900 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
  )
}
