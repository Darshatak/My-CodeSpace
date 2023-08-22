const apiKey = "44e83d4edfffbf79902101f06b46e9c7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const lastLocation = document.querySelector("#last");
const NotFound = document.querySelector("#notF");
const Weather = document.querySelector(".weather");

lastLocationFinder();

async function checkWeather() {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    
    
    if (data.cod === "404") {
        setTimeout(() => {
            NotFound.innerHTML = `City Not Found `;
            }, 500);

            // Clear the timeout after 2000 milliseconds (2 seconds)
        setTimeout(() => {
            NotFound.innerHTML = ``;
            }, 3000);
    }
    else {
        Weather.style = "display:block;"
        const sunriseTimestamp = data.sys.sunrise * 1000; // Convert seconds to milliseconds
        const sunriseDate = new Date(sunriseTimestamp);
        const formattedSunrise = sunriseDate.toLocaleTimeString();
        const sunsetTimestamp = data.sys.sunset * 1000; // Convert seconds to milliseconds
        const sunsetDate = new Date(sunsetTimestamp);
        const formattedsunset = sunsetDate.toLocaleTimeString();
        document.querySelector("#sunrise").innerHTML = "Sun-Rise : " + formattedSunrise;
        document.querySelector("#sunset").innerHTML = "Sun-Set : " + formattedsunset;
        document.querySelector(".city").innerHTML =data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°<subset>c</subset>`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "Assets/clouds.png"
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "Assets/clear.png"
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "Assets/rain.png"
            } else if (data.weather[0].main == "Dizzle") {
                weatherIcon.src = "Assets/drizzle.png"
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "Assets/mist.png"
            }
    }
    

}




    searchBtn.addEventListener("click", () => {
        if (searchBox.value !== "") {
            city = searchBox.value;
            localStorage.setItem('city',city);
            checkWeather();
        } else {
            setTimeout(() => {
                searchBox.style="border: 5px solid red"
                searchBox.placeholder="Search Can't be empty"
            }, 500);

            // Clear the timeout after 2000 milliseconds (2 seconds)
            setTimeout(() => {
               searchBox.style="border:none"
            }, 2000);
            


            
        }
    })

searchBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
        searchBox.value =""
    }
});



    
function lastLocationFinder() {
    if (!localStorage.getItem('city') == "") {
            setTimeout(() => {
                lastLocation.innerHTML = `Last Searched Location is Used!<h1 style= "color:yellow;"> ${localStorage.getItem('city')}</h1> `;
            }, 500);
            setTimeout(() => {
                lastLocation.innerHTML = "";
            }, 2900);
        
            city = localStorage.getItem('city');
            checkWeather();
    } else { 
        Weather.style="display:none;"
    }
}


