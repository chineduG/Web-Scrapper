// Importing the NPM packages that we installed
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';

// Function starts here
async function getFormulaOneDrivers() {

  try {
    // Fetch data from URL and store the response into a const
    const response = await fetch('https://www.formula1.com/en/drivers.html');
    // Convert the response into text
    // console.log(response);
    const body = await response.text();

    console.log(body);

    // Load body data
    const $ = cheerio.load(body);

    // Create empty array
    const items = [];
    
    // Selecting Each col-12 class name and iterate through the list
    $('.listing-items--wrapper > .row > .col-12').map((i, el) => {
      
      const rank = $(el).find('.rank').text();
      const points = $(el).find('.points > .f1-wide--s').text();
      const firstName = $(el).find('.listing-item--name span:first').text();
      const lastName = $(el).find('.listing-item--name span:last').text();
      const team = $(el).find('.listing-item--team').text();
      const photo = $(el).find('.listing-item--photo img').attr('data-src');


      items.push({
        rank,
        points,
        firstName,
        lastName,
        team,
        photo
      });

    });

    // Write data to a file json format

    fs.writeFile('formula 1.json', JSON.stringify(items), function(err){
      if(err) return console.log(err);
      console.log('Formula 1 Drivers were saved as: formula 1.json');
    })


  } catch (error) {
    console.log(error);
  }
}

// Run getFormulaOneDrivers
getFormulaOneDrivers();