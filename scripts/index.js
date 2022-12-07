"use strict"

window.onload = function(){
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

