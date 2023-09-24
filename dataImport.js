import fetch from 'node-fetch';
const apiURL = 'https://swapi.dev/api/people/2';
fetch(apiURL)
    .then(res => res.json()) // convert data to json
    .then(json => {
        console.log(json); // log json data
        console.log('all data was received successfully');
    });
console.log(`Getting data`); // asynchronous - prints before the lines above while they are getting the information and processing the command