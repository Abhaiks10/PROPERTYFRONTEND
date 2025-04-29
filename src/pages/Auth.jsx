import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allApi';

function Auth({ register }) {
    const navigate = useNavigate();
    const [userDetails, setUserdetails] = useState({ 
        username: '', 
        email: '', 
        password: '' 
    });
    const [isAdminLogin, setIsAdminLogin] = useState(false);

    // Clear form fields on component mount
    useEffect(() => {
        setUserdetails({ username: '', email: '', password: '' });
        setIsAdminLogin(false);
    }, []);

    const handleRegister = async () => {
        const { username, email, password } = userDetails;
        if (!username || !email || !password) {
            toast.info('Please fill the form');
        } else {
            const result = await registerAPI(userDetails);
            if (result.status === 200) {
                toast.success('Successfully Registered');
                setUserdetails({ username: '', email: '', password: '' });
                navigate('/login');
            } else {
                toast.error(result.response?.data || 'Something Went Wrong');
            }
        }
    };

    const handleLogin = async () => {
        const { email, password } = userDetails;
        if (!email || !password) {
            toast.info('Please fill the form');
        } else {
            // Check for admin credentials
            if (isAdminLogin) {
                if (email === 'abhaiks07@gmail.com' && password === 'abhai@12345') {
                    toast.success('Admin Login Successful');
                    sessionStorage.setItem('adminUser', JSON.stringify({
                        email: 'abhaiks07@gmail.com',
                        username: 'adminproperty'
                    }));
                    sessionStorage.setItem('adminToken', 'admin-auth-token');
                    // Clear fields immediately after successful login
                    setUserdetails({ username: '', email: '', password: '' });
                    setIsAdminLogin(false);
                    setTimeout(() => navigate('/admin'), 2000);
                    return;
                } else {
                    toast.error('Invalid Admin Credentials');
                    return;
                }
            }

            // Regular user login
            const result = await loginAPI({ email, password });
            if (result.status === 200) {
                toast.success('Successfully Logged in');
                sessionStorage.setItem('existingUser', JSON.stringify(result.data.existingUser));
                sessionStorage.setItem('token', result.data.token);
                setUserdetails({ username: '', email: '', password: '' });
                setTimeout(() => navigate('/property'), 2000);
            } else {
                toast.error(result.response?.data || 'Something Went Wrong');
            }
        }
    };

    const handleAdminLogin = () => {
        setIsAdminLogin(true);
        // Don't pre-fill credentials, let admin type them
        setUserdetails({ username: '', email: '', password: '' });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold text-center mb-4">
                    {isAdminLogin ? 'Admin Login' : register ? 'Sign Up' : 'Sign In'}
                </h2>
                
                {register && !isAdminLogin && (
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-2 mb-2 border rounded"
                        value={userDetails.username}
                        onChange={(e) => setUserdetails({ ...userDetails, username: e.target.value })}
                    />
                )}
                
                <input
                    type="email"
                    placeholder={isAdminLogin ? "Admin Email" : "Email"}
                    className="w-full p-2 mb-2 border rounded"
                    value={userDetails.email}
                    onChange={(e) => setUserdetails({ ...userDetails, email: e.target.value })}
                />
                
                <input
                    type="password"
                    placeholder={isAdminLogin ? "Admin Password" : "Password"}
                    className="w-full p-2 mb-2 border rounded"
                    value={userDetails.password}
                    onChange={(e) => setUserdetails({ ...userDetails, password: e.target.value })}
                />
                
                <button
                    onClick={register ? handleRegister : handleLogin}
                    className="w-full p-2 mt-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
                >
                    {register ? 'Register' : 'Sign In'}
                </button>
                
                {!register && !isAdminLogin && (
                    <button 
                        onClick={handleAdminLogin}
                        className="w-full p-2 mt-2 text-white bg-red-600 hover:bg-red-700 rounded"
                    >
                        Admin Login
                    </button>
                )}
                
                {isAdminLogin && (
                    <>
                        <button 
                            onClick={() => {
                                setIsAdminLogin(false);
                                setUserdetails({ username: '', email: '', password: '' });
                            }}
                            className="w-full p-2 mt-2 text-white bg-gray-600 hover:bg-gray-700 rounded"
                        >
                            Back to User Login
                        </button>
                       
                    </>
                )}
                
                {!isAdminLogin && (
                    <p className="text-center mt-2">
                        {register ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <Link to={register ? '/login' : '/register'} className="text-blue-600 hover:underline">
                            {register ? 'Sign In' : 'Sign Up'}
                        </Link>
                    </p>
                )}
            </div>
            <ToastContainer position="top-center" theme="colored" autoClose={2000} />
        </div>
    );
}

export default Auth;