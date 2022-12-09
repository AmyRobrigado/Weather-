"use strict"

window.onload = function(){
    document.getElementById("citySlct").onchange = currentlySelectedCity;

    pickByCityDropdown();
}

function pickByCityDropdown(){
    const citySelect = document.getElementById("citySlct");
    let citySelectOpt = document.createElement("option"); 

    citySelectOpt.value = "";
    citySelectOpt.textContent = "Select a City...";
    citySelect.appendChild(citySelectOpt);

    let cityLength = cities.length; 
    for(let i = 0; i < cityLength; i++){
        let opt1 = document.createElement("option");
        opt1.textContent = cities[i].city;

        citySelect.appendChild(opt1);
    }
}

function currentlySelectedCity(){
    let selectYourCity = document.getElementById("citySlct").value
    let tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    for(let i = 0; i < cities.length; i++){
        let stationLookupUrl =`https://api.weather.gov/points/${cities[i].latitude},${cities[i].longitude}`;
        if (selectYourCity == cities[i].city)
        fetch(stationLookupUrl)
        .then(response => response.json())
        .then(data => {

        let weatherUrl = data.properties.forecast;

        fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
        for(let w = 0; w < data.properties.periods.length; w++){

            let tr = document.createElement("tr");
            tbody.appendChild(tr);

            //-----------------------------------------------------

            let day = document.createElement("td");
            day.innerHTML = data.properties.periods[w].name;
            tr.appendChild(day);

            let temperature = document.createElement("td");
            temperature.innerHTML = data.properties.periods[w].temperature + " " + data.properties.periods[w].temperatureUnit
            tr.appendChild(temperature);

            let forecast = document.createElement("td");
            forecast.innerHTML = data.properties.periods[w].detailedForecast
            tr.appendChild(forecast);
        
        }
        
        })
        })
    }
}