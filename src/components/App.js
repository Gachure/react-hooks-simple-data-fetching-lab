// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  // State to manage loading and image data
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Fetch a random dog image when the component mounts
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setImageSrc(data.message); // Set the image source from the response
        setIsLoading(false); // Set loading to false once data is received
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false even on error
      });
  }, []); // Empty dependency array, so it only runs once when component mounts

  if (isLoading) {
    // Display "Loading..." while the data is being fetched
    return <p>Loading...</p>;
  }

  return (
    // Display the fetched dog image
    <div>
      <img src={imageSrc} alt="A Random Dog" />
    </div>
  );
}

export default App;
