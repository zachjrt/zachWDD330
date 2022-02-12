const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5525577&units=imperial&&APPID=78f51ac9e9dd565af2ff080a1b0ea9d1"
fetch(apiURL)
 .then((resp) => resp.json())
 .then((lubbock) => {console.log(lubbock);
  
   let description = lubbock.weather[0].description;
   document.getElementById('temperature').innerHTML = Math.round(lubbock.main.temp);
   document.getElementById('currently').innerHTML = description;
   
});