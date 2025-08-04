import React, { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    age: '',
    state: 'TG',
    gender: '',
    contractAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.contractAccepted) {
      alert('You must accept the contract.');
      return;
    }
    console.log('Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>

        <div>
          <label>Password:</label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div>
          <label>Age:</label><br />
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div>
          <label>State:</label><br />
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="TG">TG</option>
            <option value="AP">AP</option>
            <option value="TN">TN</option>
          </select>
        </div>

        <div>
          <label>Gender:</label><br />
          <label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} />
            Male
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} />
            Female
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" name="contractAccepted" checked={formData.contractAccepted} onChange={handleChange} />
            I accept the contract terms.
          </label>
        </div>

        <div style={{ marginTop: '10px' }}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
