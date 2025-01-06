// Import necessary libraries
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    contact: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    setProfile({
      ...profile,
      resume: e.target.files[0],
    });
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
    console.log(profile);
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <div className="card-header text-center" style={{ background: 'linear-gradient(to right, #007bff, #0056b3)', color: 'white', borderRadius: '15px 15px 0 0' }}>
          <h3>Employee Profile</h3>
        </div>
        <div className="card-body p-4">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="form-label">Contact Info</label>
              <input
                type="text"
                className="form-control"
                id="contact"
                name="contact"
                value={profile.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="resume" className="form-label">Upload Resume</label>
              <input
                type="file"
                className="form-control"
                id="resume"
                onChange={handleFileUpload}
              />
            </div>
            <button
              type="button"
              className="btn btn-success w-100"
              style={{ borderRadius: '5px', padding: '10px 0' }}
              onClick={handleSave}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;