const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '207ba822e9msh5651e5aa3c2a49bp16822djsnca746fc9ba11',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));