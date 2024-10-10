console.log("main.js");

fetch(`https://api.openweathermap.org/data/2.5/weatherlat=39.099724&lon=-94.578331&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));