import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  
  const fetchRandomImage = async () => {
    try {
      const response = await axios.get('https://api.pexels.com/v1/curated', {
        headers: {
          Authorization: 'OYDR2ZhnvLa61pREknqxJkbjPO1V1SmtIzdKUBTEEt2gHXHEhvN7S5Nn', 
        },
        params: {
          per_page: 1,
          page: Math.floor(Math.random() * 100), 
        },
      });
      setImageUrl(response.data.photos[0].src.large); 
    } catch (error) {
      console.error('Error fetching image from Pexels API:', error);
    }
  };

 
  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div className="App">
      <h1>Random </h1>
      {imageUrl && <img src={imageUrl} alt="Random from Pexels" />}
      <br />
      <button onClick={fetchRandomImage} style={{backgroundColor: 'pink', color: 'white'}}>Next Image</button>
    </div>
  );
};

export default App;

