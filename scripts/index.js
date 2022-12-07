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


}