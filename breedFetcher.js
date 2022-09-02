const request = require('request');

let breed = process.argv[2];

const breedMatch = (kitty, breedData) => {
  let descriptionPls = "";
  for (const kittyBreed of breedData) {
    if (kitty === kittyBreed.name) {
      descriptionPls = kittyBreed.description;
    }
  } return descriptionPls;
};

const breedTraits = (breedName) => request('https://api.thecatapi.com/v1/breeds', (error, response, body) => {
  const data = JSON.parse(body);
  // console.log(data[0].description);

  const returnData = breedMatch(breedName, data);
  console.log(returnData);
  // console.log(typeof body);
});

// attempt to match 'name' of breed to user input



breedTraits(breed);


// https://api.thecatapi.com/v1/breeds
