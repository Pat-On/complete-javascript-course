'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//asynchronous not blocking behaving 
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal');
request.send();

request.addEventListener('load', function () {
    console.log(this.responseText);
})