import React, { useState, useEffect } from 'react';
import '../styles/profile.css';

const ProfileContent = () => {
    const [profile, setProfile] = useState(null);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState('');
    const [updateError, setUpdateError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            setFetchError('');
            try {
                const token = localStorage.getItem('access');
                const response = await fetch('http://127.0.0.1:8000/api/user/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setProfile(data);
                    console.log(data);
                    
                    setFormData({
                        username: data.username || '',
                        email: data.email || '',
                        first_name: data.first_name || '',
                        last_name: data.last_name || '',
                        phoneNumber: data.phone_number || '',  // Use phoneNumber consistently
                        city: data.city || '',
                        country: data.country || ''
                    });
                } else {
                    setFetchError(data.message || 'Failed to fetch profile information.');
                }
            } catch (err) {
                setFetchError('An unexpected error occurred.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
        setSuccessMessage('');
        setUpdateError('');
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setSuccessMessage('');
        setUpdateError('');
        // Reset formData to the original profile data
        setFormData({
            username: profile.username || '',
            email: profile.email || '',
            first_name: profile.first_name || '',
            last_name: profile.last_name || '',
            phoneNumber: profile.phone_number || '',
            city: profile.city || '',
            country: profile.country || ''
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSaveClick = async () => {
        setUpdateError('');
        try {
            const token = localStorage.getItem('access');
            const response = await fetch('http://127.0.0.1:8000/api/user/update-info/', {
                method: 'POST', // or PATCH based on your API design
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setProfile(data);
                setIsEditing(false);
                setSuccessMessage('Profile updated successfully.');
            } else {
                setUpdateError(data.message || 'Update failed.');
            }
        } catch (err) {
            setUpdateError('An unexpected error occurred.');
        }
    };

    if (loading) {
        return (
            <div className="profile-container">
                <p>Loading...</p>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="profile-container">
                <p className="error">{fetchError || 'Profile not found.'}</p>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <h1>{profile.username} Profile</h1>
                </div>
                {successMessage && (
                    <p className="success-message">{successMessage}</p>
                )}
                {updateError && (
                    <p className="error-message">{updateError}</p>
                )}
                <div className="profile-body">
                    <div className="profile-field">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="profile-field">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="profile-field">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="profile-field">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="profile-field">
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"  // Consistent name
                            value={formData.phoneNumber} // Consistent value
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="profile-field">
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="profile-field">
                        <label>Country:</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="profile-actions">
                        {!isEditing ? (
                            <button className="btn edit-btn" onClick={handleEditClick}>
                                Edit Profile
                            </button>
                        ) : (
                            <>
                                <button className="btn save-btn" onClick={handleSaveClick}>
                                    Save
                                </button>
                                <button className="btn cancel-btn" onClick={handleCancelClick}>
                                    Cancel
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileContent;