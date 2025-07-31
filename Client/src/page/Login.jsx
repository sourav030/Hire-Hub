import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../Context/Context';

const Login = () => {
    const [mode, setMode] = useState('login');
    const { login, setLogin, setToken, token } = useAppContext();
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (mode === 'login') {
                const res = await axios.post('http://localhost:5000/api/auth/login', {
                    email: formData.email,
                    password: formData.password,
                });

                setToken(res.data.token)
                localStorage.setItem('token',res.data.token)
                toast.success("Login successful!");
                setLogin(true)
                setTimeout(() => {
                    navigate('/'); // Redirect to homepage
                }, );

            } else {
                const res = await axios.post('http://localhost:5000/api/auth/signup', {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                });
                toast.success("Signup successful! Please login now.");

                setMode('login');
            }
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Something went wrong!';
            toast.error(errorMsg);
        }
    };

   


    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
            <ToastContainer position="top-right" />
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-2xl p-8 w-[400px] flex flex-col gap-6"
            >
                <h2 className="text-2xl font-bold text-center text-indigo-700">
                    {mode === 'login' ? 'Login to Your Account' : 'Create a New Account'}
                </h2>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    required
                    className="border border-gray-300 rounded-md h-[40px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                {mode === 'signup' && (
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your Name"
                        required
                        className="border border-gray-300 rounded-md h-[40px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                )}

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your Password"
                    required
                    className="border border-gray-300 rounded-md h-[40px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button
                    type="submit"
                    className="bg-indigo-600 text-white cursor-pointer py-3 rounded-md hover:bg-indigo-700 transition-all"
                >
                    {mode === 'login' ? 'Login' : 'Sign Up'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                    {mode === 'login' ? (
                        <>
                            Don’t have an account?{' '}
                            <span
                                className="text-indigo-600 hover:underline cursor-pointer"
                                onClick={() => setMode('signup')}
                            >
                                Register
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <span
                                className="text-indigo-600 hover:underline cursor-pointer"
                                onClick={() => setMode('login')}
                            >
                                Login
                            </span>
                        </>
                    )}
                </p>
            </form>
        </div>
    );
};

export default Login;
