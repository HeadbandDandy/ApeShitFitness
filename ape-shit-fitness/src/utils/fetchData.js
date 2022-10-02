// this file will contain connection for rapidApi 

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



// below contains response and data formatting from API's
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()

    return data;
}