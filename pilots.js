const express = require('express')
const app = express();

app.use(express.json())
//El JSON con los pilotos, lo he colocado aqui debido a que me resulta mas sencillo para la realizacion de los endpoints
const pilots = {
"pilots" : [
    { "id" : 1,
    "name": "Lewis Hamilton",
    "number": 44,
    "championships": 7,
    "continent" : "Europe",
    "puntuacion" : 5,
    "team": "Mercedes",
    "wins" : 103,
    "icon": "https://media.api-sports.io/formula-1/drivers/20.png"
  },
  {
    "id" : 2,
    "name": "George Russell",
    "number": 63,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion": 4.5,
    "team": "Mercedes",
    "wins" : 1,
    "icon": "https://media.api-sports.io/formula-1/drivers/51.png"
  },
  {
    "id" : 3,
    "name": "Max Verstappen",
    "number": 1,
    "championships": 2,
    "continent" : "Europe",
    "puntuacion" : 5,
    "team": "Red Bull Racing",
    "wins" : 35,
    "icon": "https://media.api-sports.io/formula-1/drivers/25.png"
  },
  {
    "id" : 4,
    "name": "Sergio Perez",
    "number": 11,
    "championships": 0,
    "continent" : "America",
    "puntuacion" : 4,
    "team": "Red Bull Racing",
    "wins" : 4,
    "icon": "https://media.api-sports.io/formula-1/drivers/10.png"
  },
  {
    "id" : 5,
    "name": "Charles Leclerc",
    "number": 16,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 4.5,
    "team": "Ferrari",
    "wins" : 5,
    "icon": "https://media.api-sports.io/formula-1/drivers/34.png"
  },
  {
    "id" : 6,
    "name": "Carlos Sainz",
    "number": 55,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 4,
    "team": "Ferrari",
    "wins" : 1,
    "icon": "https://media.api-sports.io/formula-1/drivers/24.png"
  },          
  {
    "id" : 7,
    "name": "Esteban Ocon",
    "number": 31,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 3.5,
    "team": "Alpine",
    "wins" : 1,
    "icon":"https://media.api-sports.io/formula-1/drivers/28.png"
  },
  {
    "id" : 8,
    "name": "Pierre Gasly",
    "number": 10,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 2.5,
    "team": "Alpine",
    "wins" : 1,
    "icon": "https://media.api-sports.io/formula-1/drivers/36.png"
  },
  {
    "id" : 9,
    "name": "Lando Norris",
    "number": 4,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 4,
    "team": "McLaren",
    "wins" : 0,
    "icon":"https://media.api-sports.io/formula-1/drivers/49.png"
  },
  {
    "id" : 10,
    "name": "Oscar Piastri",
    "number": 81,
    "championships": 0,
    "continent" : "Oceania",
    "puntuacion" : 3,
    "team": "McLaren",
    "wins" : 0,
    "icon": "https://s.yimg.com/ny/api/res/1.2/NBzsHNRWE.9rRqObtYC1xg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-08/d8ead070-16e6-11ed-abda-2de929dce684"
  },
  {
    "id" : 11,
    "name": "Valtteri Bottas",
    "number": 77,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 4,
    "team": "Alfa Romeo",
    "wins" : 10,
    "icon" : "https://media.api-sports.io/formula-1/drivers/5.png"
  },
  {
    "id" : 12,
    "name": "Guanyu Zhou",
    "number": 24,
    "championships": 0,
    "continent" : "Asia",
    "puntuacion" : 2.5,
    "team": "Alfa Romeo",
    "wins" : 0,
    "icon": "https://media.api-sports.io/formula-1/drivers/83.png"
  },
  {
    "id" : 13,
    "name": "Kevin Magnussen",
    "number": 20,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 3,
    "team": "Haas",
    "wins" : 0,
    "icon": "https://media.api-sports.io/formula-1/drivers/2.png"
  },
  {
    "id" : 14,
    "name": "Nico Hulkenberg",
    "number": 27,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 0,
    "team": "Haas",
    "wins" : 0,
    "icon": "https://media.api-sports.io/formula-1/drivers/6.png"
  },
  {
    "id" : 15,
    "name": "Yuri Tsunoda",
    "number": 22,
    "championships": 0,
    "continent" : "Asia",
    "puntuacion" : 3,
    "team": "Alpha Tauri",
    "wins" : 0,
    "icon": "https://media.api-sports.io/formula-1/drivers/82.png"
  },
  {
    "id" : 16,
    "name": "Nyck de Vries",
    "number": 21,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 2,
    "team": "Alpha Tauri",
    "wins" : 0,
    "icon": "https://media.api-sports.io/formula-1/drivers/88.png"
  },
  {
    "id" : 17,
    "name": "Fernando Alonso",
    "number": 14,
    "championships": 2,
    "continent" : "Europe",
    "puntuacion" : 5,
    "team": "Aston Martin",
    "wins" : 32,
    "icon": "https://media.api-sports.io/formula-1/drivers/4.png"
  },
  {
    "id" : 18,
    "name": "Lance Stroll",
    "number": 18,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 3.5,
    "team": "Aston Martin",
    "wins" : 0,
    "icon": "https://media.api-sports.io/formula-1/drivers/31.png"
  },
  {
    "id" : 19,
    "name": "Alexander Albon",
    "number": 23,
    "championships": 0,
    "continent" : "Asia",
    "puntuacion" : 3,
    "team": "Williams",
    "wins" : 0,
    "icon": "https://media.api-sports.io/formula-1/drivers/50.png"
  },
  {
    "id" : 20,
    "name": "Logan Sargeant",
    "number": 2,
    "championships": 0,
    "continent" : "No",
    "puntuacion" : 1.5,
    "team": "Williams",
    "wins" : 0,
    "icon": "https://staticv2.revistascratch.com//images/noticia/williams-da-la-oportunidad-a-logan-sargeant-de-subirse-al-fw44-en-los-libres-1-de-estados-unidos_full.jpg"
  }
]}

//Endpoint base para saber si funciona
app.get('/', (req, res) => {
    res.send('Node JS api');
  });
//Recibe todos los pilotos
app.get('/api/pilots', (req, res) => {
  res.send(pilots.pilots);
  });
//Recibe un piloto concreto
app.get('/api/pilot/:id', (req, res) => {
    console.log(pilots.pilots)
    const pilot = pilots.pilots.find(c => c.id === parseInt(req.params.id));
    if(!pilot) return res.status(404).send('Equipo no encontrado')
    else res.send(pilot)
});
//Recibe los pilotos filtrado por equipos
app.get('/api/pilot/team/:team', (req,res) => {
    const country = pilots.pilots.filter(c => c.team == req.params.team);
    if(!country) return res.status(404).send('Equipo no encontrado')
    else res.send(country)
})

app.get('/api/pilot/country/:country', (req,res) => {
  const country = pilots.pilots.filter(c => c.team == req.params.country);
  if(!country) return res.status(404).send('Equipo no encontrado')
  else res.send(country)
})

module.exports = app