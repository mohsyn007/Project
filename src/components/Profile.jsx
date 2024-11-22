import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext); // Get user data from AuthContext

    // Check if user is logged in or not
    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-3xl">Please log in to view your profile.</h2>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200">
            <div className="text-center">
                <h2 className="text-3xl mb-4">Update Your Profile</h2>
                <div className="flex flex-col items-center">
                
                    {user.photoURL ? (
                        <img 
                            src={user.photoURL} 
                            alt="User Avatar" 
                            className="w-24 h-24 rounded-full mb-4" 
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white mb-4">
                            No Photo
                        </div>
                    )}

                    <p><strong>Name:</strong> {user.displayName || 'Not provided'}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phoneNumber || 'Not provided'}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
