console.log("Client side js file loaded");

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})




const form = document.querySelector("form");
const search = document.querySelector("input")
const result = document.querySelector('.result')

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const location = search.value

 //commenting out my api key for security
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?
    access_token=${apiKey}&limit=1`).then((response)=>{
    response.json().then((data)=>{
        console.log(data);

        result.innerHTML = '';
       result.insertAdjacentHTML('beforeend',
       `The location you selected is ${data.features[0].place_name}`)
    })
})

})