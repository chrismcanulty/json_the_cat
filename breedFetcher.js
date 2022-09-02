const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    callback(error, null)
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    callback("Breed not found", null)
    // console.log("Breed not found!");
    return;
  }
    callback(null, data[0].description)
  // console.log(data[0].description);
  })
}



module.exports = { fetchBreedDescription };

// // Old solution

// const request = require('request');

// // const breed = process.argv[2];

// const breedMatch = (kitty, breedData) => {
//   let descriptionPls = "";
//   for (const kittyBreed of breedData) {
//     if (kitty === kittyBreed.name) {
//       descriptionPls = kittyBreed.description;
//     }
//   } const finalDescription = JSON.stringify(descriptionPls);
//   console.log(typeof finalDescription)
//   return finalDescription;
// };

// const errorFunc = (error) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//     return;
//   }
// };

// const breedTraits = (breedName) => {
//   let returnData = "";
//   request('https://api.thecatapi.com/v1/breeds', (error, response, body) => {
//   errorFunc(error);
//   const data = JSON.parse(body);
//   const returnData = breedMatch(breedName, data);
//   // JSON.stringify(returnData);
//   console.log(returnData);
// }); return returnData;
// }

// // attempt to match 'name' of breed to user input

// module.exports = { breedTraits };

// // breedTraits("Siberian");

// // console.log(typeof breedTraits("Siberian"));


// // https://api.thecatapi.com/v1/breeds
