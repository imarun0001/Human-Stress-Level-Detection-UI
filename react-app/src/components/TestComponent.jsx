import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/test');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Test GET Component</h2>
      <p>Message from server: {message}</p>
    </div>
  );
}

export default TestComponent;