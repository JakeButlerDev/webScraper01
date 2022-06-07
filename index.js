    // An attempt to scrape either fantrax or Premier League website for player data
    // Install and require express, axios, cheerio packages
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const PORT = 8000
    // Initiate express
const app = express()
    // Supply url
const urlGoals = 'https://www.premierleague.com/stats/top/players/goals?se=418'

axios(urlGoals)
    .then(response => {         // CHAINING - look into later
        const html = response.data
        const $ = cheerio.load(html)

        
        $('.playerName', html).each(function() {      // DOM class name after .
            var playerName = $(this).text()     // Assign variable to store value
            console.log(playerName);            // Log for testing
        }) 
        $('.mainStat text-centre', html).each(function() {
            var goals = $(this).value()     // Assign variable to store value
            console.log(goals);             // Log for testing
        })

    }).catch(err => {
        console.log(err);           // Print errors
    }) 

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})