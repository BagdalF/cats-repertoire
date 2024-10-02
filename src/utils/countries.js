export const CountriesBreeds = (data) => {
  let breedOrigins = [];

  for (let i = 0; i < data.length; i++) {
    if (!breedOrigins.some((cat) => cat.country === data[i].origin)) {
      breedOrigins.push({
        country: data[i].origin,
        breedsNumber: 1,
      });
    } else {
      breedOrigins.find((cat) => cat.country === data[i].origin).breedsNumber++;
    }
  }

  breedOrigins.sort(function (a, b) {
    return b.breedsNumber - a.breedsNumber;
  });

  return breedOrigins;
};

// for (let index = 0; index < data.length; index++) {
//   if (!breedOrigins.includes(data[index].origin)) {
//     numberBreedsCountry.push(1);
//     breedOrigins.push(data[index].origin);
//   } else {
//     let num = breedOrigins.indexOf(data[index].origin);
//     numberBreedsCountry[num]++;
//   }
// }
// if (
//   numberBreedsCountry[num] >
//   numberBreedsCountry[breedOrigins.indexOf(biggestBreeder)]
// )
//   biggestBreeder = numberBreedsCountry[num];
