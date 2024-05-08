import React, { useState } from 'react';
import axios from 'axios';

function StressForm() {
  const [formData, setFormData] = useState({
    snoring_range: 90,
    respiration_rate: 20,
    body_temperature: 90,
    limb_movement_rate: 20,
    blood_oxygen_levels: 80,
    eye_movement: 70,
    hours_of_sleep: 9,
    heart_rate: 90
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) // Convert input value to float
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    try {
      const response = await axios.post('http://localhost:8000/result', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(response.data);
      setResult(response.data.result); // Set result from the response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Human Stress Level Detection Form</h2>
        <label htmlFor="snoring_range">Snoring range (in dB)</label>
        <input type="number" min="40" max="120" id="snoring_range" name="snoring_range" value={formData.snoring_range} onChange={handleChange} required/><br/>
        <label htmlFor="respiration_rate">Respiration rate (in bpm)</label>
        <input type="number" min="16" max="35" id="respiration_rate" name="respiration_rate" value={formData.respiration_rate} onChange={handleChange} required/><br/>
        <label htmlFor="body_temperature">Body temperature (in °F)</label>
        <input type="number" min="85" max="99" id="body_temperature" name="body_temperature" value={formData.body_temperature} onChange={handleChange} required/><br/>
        <label htmlFor="limb_movement_rate">Limb movement rate (in sec)</label>
        <input type="number" min="4" max="25" id="limb_movement_rate" name="limb_movement_rate" value={formData.limb_movement_rate} onChange={handleChange} required/><br/>
        <label htmlFor="blood_oxygen_levels">Blood oxygen levels (in %)</label>
        <input type="number" min="75" max="97" id="blood_oxygen_levels" name="blood_oxygen_levels" value={formData.blood_oxygen_levels} onChange={handleChange} required/><br/>
        <label htmlFor="eye_movement">Rapid Eye Movement</label>
        <input type="number" min="60" max="120" id="eye_movement" name="eye_movement" value={formData.eye_movement} onChange={handleChange} required/><br/>
        <label htmlFor="hours_of_sleep">Hours of sleep</label>
        <input type="number" min="0" max="9" id="hours_of_sleep" name="hours_of_sleep" value={formData.hours_of_sleep} onChange={handleChange} required/><br/>
        <label htmlFor="heart_rate">Heart rate (in bpm)</label>
        <input type="number" min="50" max="100" id="heart_rate" name="heart_rate" value={formData.heart_rate} onChange={handleChange} required/><br/>
        <input type="submit" value="Submit"/>
      </form>
      
      {/* Display the result */}
      <p>Result is: {result}</p>
    </div>
  );
}

export default StressForm;