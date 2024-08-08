import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.scss';

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        contact: '',
        username: '',
        email: '',
    });
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (!userInfo) {
                navigate('/');
                return;
            }
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };
                const { data } = await axios.get('http://localhost:5000/api/users/profile', config);
                setUser(data);
            } catch (error) {
                console.error('Error fetching user data', error);
                localStorage.removeItem('userInfo');
                navigate('/');
            }
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/');
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            const { data } = await axios.put('http://localhost:5000/api/users/profile', { ...user, password }, config);
            setUser(data);
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete your profile?')) {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };
                await axios.delete('http://localhost:5000/api/users/profile', config);
                localStorage.removeItem('userInfo');
                navigate('/');
            } catch (error) {
                console.error('Error deleting profile', error);
            }
        }
    };

    return (
        <div>
            {user ? (
                <div className='main-block'>
                    <h1>Profile Details</h1>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Contact:</label>
                            <input
                                type="text"
                                value={user.contact}
                                onChange={(e) => setUser({ ...user, contact: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                            />
                        </div>
                        <div>
                            <label>New Password (optional):</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Update Profile</button>
                    </form>
                    <div className='crud'>
                    <button type="submit" onClick={handleLogout}>Logout</button>
                    <button type="submit" onClick={handleDelete}>Delete Profile</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;