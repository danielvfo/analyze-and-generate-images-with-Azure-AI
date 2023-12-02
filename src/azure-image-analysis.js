// azure-image-analysis.js
import axios from 'axios';

const subscriptionKey = process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY;
const endpoint = process.env.REACT_APP_AZURE_ENDPOINT;

export async function analyzeImage(imageUrl, features) {
  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscriptionKey
  };

  const body = {
    url: imageUrl
  };

  console.log();

  const response = await axios.post(`${endpoint}computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=read,caption`, body, { headers });
  return response.data;
}