var weather = {
    apiKey: "19e3a4ca26fba327cd8b8a0cfc730b3b",
    getWeather : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then(response => response.json()).then(data => this.display(data))
    },


    display : function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {speed} = data.wind;
        const {temp, humidity} = data.main;


        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".temp").innerHTML = "Weather in " + temp + "°C";
        document.querySelector(".descr").innerHTML = "Weather in " + description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".humid").innerHTML = "Humidity is " + humidity + " %";
        document.querySelector(".speed").innerHTML = "Wind Speed is " + speed ;

        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
  
    search : function(){
        this.getWeather(document.querySelector(".INPUT").value);
    },
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});


document.querySelector("INPUT").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
});

  weather.getWeather("Denver");
