import axios from "axios"

function makeRequest(url) {
  return axios.get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw new Error('Request failed: ' + error.response.status);
    });
}

// Usage
makeRequest('https://api.example.com/data')
  .then(function (responseData) {
    // Process responseData
  })
  .catch(function (error) {
    // Handle errors
  });
