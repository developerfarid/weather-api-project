let weather = {
    "apikey": "eefc0e6175ffb836ad487e77fd1af934",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apikey
        )
        .then(respon => respon.json())
    .then(data => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity,feels_like} = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText= `Weather in ${name}`
        document.querySelector(".icon").src= `https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector(".tem").innerText= ` ${temp} °C`
        document.querySelector(".cludy").innerText= ` ${description}`
        document.querySelector(".huminity").innerText= ` Humidity: ${humidity}`
        document.querySelector(".wind").innerText = ` ${speed} km/h`
        document.querySelector(".feels_like").innerText = `Feels Like: ${feels_like} °C`
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')"

        },
        search: function () {
            this.fetchWeather(document.querySelector("#ok").value);
            
        }
    }
    document.querySelector(".search-bar button").addEventListener("click", ()=> weather.search())
    document.querySelector(".search-bar").addEventListener("keyup", (event) =>{
        if (event.key =="Enter") {
            weather.search() 
        }
    })
        weather.fetchWeather("dhaka")
   

