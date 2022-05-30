// Importing the NPM packages that we installed
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

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

    // const wrapper = $('.row');
    // console.log(wrapper.addBack);

    


    // Create empty array
    const items = [];
    
    // Selecting Each col-12 class name and iterate through the list
    $('.listing-items--wrapper > .row > .col-12').map((i, el) => {
        const rank 

    });


    
    
  } catch (error) {
    console.log(error);
  }
}

// Run getFormulaOneDrivers
getFormulaOneDrivers();