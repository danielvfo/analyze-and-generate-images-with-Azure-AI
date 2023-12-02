// App.js
import React, { useState } from 'react';
import './App.css';
import { analyzeImage } from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    setIsLoading(true);
    const results = await analyzeImage(imageUrl, 'Categories,Description,Color');
    setAnalysisResults(results);
    setIsLoading(false);
  };

  const DisplayResults = () => (
    <div>
      <h2>Image URL: {imageUrl}</h2>
      <img src={imageUrl} alt='' height='250px'></img>
      <pre>{JSON.stringify(analysisResults, null, 2)}</pre>
    </div>
  );

  return (
    <div>
      <div className="App">
        <h1>Computer Vision</h1>
        <br />
        <p>Insert URL or type prompt</p>
        <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
        <br />
        <button onClick={handleAnalyze} disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
        {/* <button type="submit">Generate</button> */}
      </div>
      {analysisResults && <DisplayResults />}
    </div>
  );
}

export default App;