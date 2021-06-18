const express = require("express");
const path = require("path");
const hbs = require('hbs');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')

const app = express();

// define paths for express configuration
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App 🌦",
    name: "Hawa Drammeh",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "ABOUT HAWA",
    name: "HAWA ALI",
  });
});

app.get("/weather", (req, res) => {

    if(!req.query.address){
        return res.send({
            error: 'Please enter a valid address',
        })
    }
  
    geocode(req.query.address, (error, {latitude, longitude, location} = {})=>{
        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return res.send({error})
            }

            res.send({
                forecast:forecastData,
                location,
                address: req.query.address
            })
        })
    })
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help from HBS",
    message: "Helpful Information and FAQ Here",
    name: 'Hawa Drammeh'
  });
});



app.get('/products', (req, res)=>{

    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.get('/help/*', (req,res)=>{
    res.render('404', {
        errorType: 'Help article not found',
        name: 'Hawa Drammeh'
    })
})

//match anything that hasnt matched so far.
app.get('*', (req, res)=>{
   res.render('404', {
       errorType: 'Page not found!',
       name: 'Hawa Drammeh'
   })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
