// this file will contain connection for rapidApi 

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '584c0f284bmsh4c28958b02b2107p1da852jsnfc072f57e955',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



// below contains response and data formatting from API's
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};