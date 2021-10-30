const key = '94e6b1cc2113460f2d1b8d5147ca4aa7';
const lang = 'kr'


// const baseURL= 'api.openweathermap.org/data/2.5/weather?q=Lagos&appid=94e6b1cc2113460f2d1b8d5147ca4aa7'


// fetch(baseURL)
//   .then((data) => {console.log('response', data.json()) })
//   .catch((error) => {
//     console.log(error);
//   });

const requestCity = async (city) => {
  const baseURL= 'http://api.openweathermap.org/data/2.5/weather'
  const query = `?q=${city}&appid=${key}`;

  //make fetch call(promise call)
  const response = await fetch(baseURL + query);


  //promise data
  const data = await response.json();
  return data;


}

