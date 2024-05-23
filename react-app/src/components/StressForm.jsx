import Chart from 'chart.js/auto'; // Import Chart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function StressForm() {
  const [formData, setFormData] = useState({
    snoring_range: '',
    respiration_rate: '',
    body_temperature: '',
    limb_movement_rate: '',
    blood_oxygen_levels: '',
    eye_movement:'',
    hours_of_sleep:'',
    heart_rate: ''
  });
  const [result, setResult] = useState('');
  const [result_proba, setResultProba] = useState(null);
  const [errors, setErrors] = useState({});
  const [result_no, setResult_no] = useState('');
  let resultNo = [...result_no][0] ;
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) // Convert input value to float
    });

    // Validate input
    if (value < parseFloat(e.target.min) || value > parseFloat(e.target.max)) {
      setErrors({ ...errors, [name]: `Value must be between ${e.target.min} and ${e.target.max}` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8000/result', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        setResult(response.data.result);
        setResultProba(response.data.result_proba);
        setResult_no(response.data.result_no);
        // console.log(result_no); 
      } catch (error) {
        console.error('Error:', error);
      }
    };

    useEffect(() => {
      // Call handleSubmit on component mount or when formData changes
      if (Object.keys(formData).length > 8) {
        handleSubmit();
      }
    }, [formData]);

  // Prepare data for the chart
  const chartData = {
    labels: ['Low/Normal', 'Medium low', 'Medium', 'Medium high', 'High'],
    datasets: [
      {
        label: 'Probability',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: result_proba || [0, 0, 0, 0, 0] // Default to zeros if result_proba is null
      }
    ]
  };
  // result color

  let textColor = '';
  switch (resultNo) {
    case 0:
      textColor = 'text-green-500';
      break;
    case 1:
      textColor = 'text-yellow-500';
      break;
    case 2:
      textColor = 'text-orange-500';
      break;
    case 3:
      textColor = 'text-red-500';
      break;
    case 4:
      textColor = 'text-red-700';
    default:
      textColor = 'text-black';
      break;
  }

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-slate-100 shadow-md rounded-md p-6">
        <h2 className="text-xl font-bold text-gray-800">Human Stress Level Detection Form</h2>
        {/* Input fields */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="snoring_range" className="block font-medium text-gray-700 mb-2">Snoring range (in dB)</label>
            <input
              type="number"
              id="snoring_range"
              name="snoring_range"
              value={formData.snoring_range}
              onChange={handleChange}
              min="40"
              max="120"
              step="0.001"
              required
              className={`shadow-sm rounded-md w-full px-3 py-2 border ${errors.snoring_range ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.snoring_range && <p className="text-red-500 text-xs">{errors.snoring_range}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="respiration_rate" className="block font-medium text-gray-700 mb-2">Respiration rate (in bpm)</label>
            <input
              type="number"
              id="respiration_rate"
              name="respiration_rate"
              value={formData.respiration_rate}
              onChange={handleChange}
              min="16"
              max="35"
              step="0.001"
              required
              className={`shadow-sm rounded-md w-full px-3 py-2 border ${errors.respiration_rate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.respiration_rate && <p className="text-red-500 text-xs">{errors.respiration_rate}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="body_temperature" className="block font-medium text-gray-700 mb-2">Body temperature (in °F)</label>
            <input
              type="number"
              id="body_temperature"
              name="body_temperature"
              value={formData.body_temperature}
              onChange={handleChange}
              min="85"
              max="99"
              step="0.001"
              required
              className={`shadow-sm rounded-md w-full px-3 py-2 border ${errors.body_temperature ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.body_temperature && <p className="text-red-500 text-xs">{errors.body_temperature}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="limb_movement_rate" className="block font-medium text-gray-700 mb-2">Limb movement rate (in sec)</label>
            <input
              type="number"
              id="limb_movement_rate"
              name="limb_movement_rate"
              value={formData.limb_movement_rate}
              onChange={handleChange}
              min="4"
              max="25"
              step="0.001"
              required
              className={`shadow-sm rounded-md w-full px-3 py-2 border ${errors.limb_movement_rate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.limb_movement_rate && <p className="text-red-500 text-xs">{errors.limb_movement_rate}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="blood_oxygen_levels" className="block font-medium text-gray-700 mb-2">Blood oxygen levels (in %)</label>
            <input
              type="number"
              id="blood_oxygen_levels"
              name="blood_oxygen_levels"
              value={formData.blood_oxygen_levels}
              onChange={handleChange}
              min="75"
              max="97"
              step="0.001"
              required
              className={`shadow-sm rounded-md w-full px-3 py-2 border ${errors.blood_oxygen_levels ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.blood_oxygen_levels && <p className="text-red-500 text-xs">{errors.blood_oxygen_levels}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="eye_movement" className="block font-medium text-gray-700 mb-2">Rapid Eye Movement</label>
            <input
              type="number"
              id="eye_movement"
              name="eye_movement"
              value={formData.eye_movement}
              onChange={handleChange}
              min="60"
              max="120"
              step="0.001"
              required
              className={`shadow-sm rounded-md w-full px-3 py-2 border ${errors.eye_movement ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.eye_movement && <p className="text-red-500 text-xs">{errors.eye_movement}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="hours_of_sleep" className="block font-medium text-gray-700 mb-2">Hours of sleep</label>
            <input
              type="number"
              id="hours_of_sleep"
              name="hours_of_sleep"
              value={formData.hours_of_sleep}
              onChange={handleChange}
              min="0"
              max="9"
              step="0.001"
              required
              className={`shadow-sm rounded-md w-full px-3 py-2 border ${errors.hours_of_sleep ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.hours_of_sleep && <p className="text-red-500 text-xs">{errors.hours_of_sleep}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="heart_rate" className="block font-medium text-gray-700 mb-2">Heart rate (in bpm)</label>
            <input
              type="number"
              id="heart_rate"
              name="heart_rate"
              value={formData.heart_rate}
              onChange={handleChange}
              min="50"
              max="100"
              step="0.001"
              required
              className={`shadow-sm rounded-md w-full px-3 py-2 border ${errors.heart_rate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.heart_rate && <p className="text-red-500 text-xs">{errors.heart_rate}</p>}
          </div>
          <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>

      <div className="bg-slate-100 shadow-md rounded-md p-6">
        {/* Display the result */}
        <p className="text-gray-800 text-xl mt-5 text-center"><span className='font-bold'>Result is:</span> <span className='font-aleo'><span className={textColor}>{result}</span></span></p>

        {/* Plot the bar chart */}
        <div className='pt-10'>
          {result_proba && <Bar data={chartData} />}
        </div>
      </div>
    </div>
  );
}

export default StressForm;