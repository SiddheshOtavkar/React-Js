import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user, setUser } = useContext(UserContext)
    // const [showProfile, setShowProfile] = useState(true)

    useEffect(() => {
        const usernameInput = document.getElementById('usernameInput');
        const passwordInput = document.getElementById('passwordInput');

        if (usernameInput && passwordInput) {
            usernameInput.value = '';
            passwordInput.value = '';
        }
    }, [user, setUser])

    const handleProfile = () => {
        setUser(null);
    }

    if (!user) return <div className="text-red-500 text-xl">Please Login!!</div>

    return (
        <div className="bg-white p-8 shadow-md rounded-md relative">
            <button
                onClick={handleProfile}
                className="absolute top-0 right-0 p-2 cursor-pointer text-gray-500 hover:text-gray-700"
            >
                X
            </button>
            <div className="text-2xl font-bold mb-4">
                Welcome {user.username} <br />
                Password is {user.password}
            </div>

        </div>
    )
}

export default Profile