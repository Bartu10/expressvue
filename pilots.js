const express = require('express')
const app = express();

app.use(express.json())
const pilots = {
"pilots" : [
    { "id" : 1,
    "name": "Lewis Hamilton",
    "number": 44,
    "championships": 7,
    "continent" : "Europe",
    "puntuacion" : 5,
    "team": "Mercedes",
    "wins" : 103
  },
  {
    "id" : 2,
    "name": "George Russell",
    "number": 63,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion": 4.5,
    "team": "Mercedes",
    "wins" : 1
  },
  {
    "id" : 3,
    "name": "Max Verstappen",
    "number": 1,
    "championships": 2,
    "continent" : "Europe",
    "puntuacion" : 5,
    "team": "Red Bull Racing",
    "wins" : 35
  },
  {
    "id" : 4,
    "name": "Sergio Perez",
    "number": 11,
    "championships": 0,
    "continent" : "America",
    "puntuacion" : 4,
    "team": "Red Bull Racing",
    "wins" : 4
  },
  {
    "id" : 5,
    "name": "Charles Leclerc",
    "number": 16,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 4.5,
    "team": "Ferrari",
    "wins" : 5
  },
  {
    "id" : 6,
    "name": "Carlos Sainz",
    "number": 55,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 4,
    "team": "Ferrari",
    "wins" : 1
  },          
  {
    "id" : 7,
    "name": "Esteban Ocon",
    "number": 31,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 3.5,
    "team": "Alpine",
    "wins" : 1
  },
  {
    "id" : 8,
    "name": "Pierre Gasly",
    "number": 10,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 2.5,
    "team": "Alpine",
    "wins" : 1
  },
  {
    "id" : 9,
    "name": "Lando Norris",
    "number": 4,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 4,
    "team": "McLaren",
    "wins" : 0
  },
  {
    "id" : 10,
    "name": "Oscar Piastri",
    "number": 81,
    "championships": 0,
    "continent" : "Oceania",
    "puntuacion" : 3,
    "team": "McLaren",
    "wins" : 0
  },
  {
    "id" : 11,
    "name": "Valtteri Bottas",
    "number": 77,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 4,
    "team": "Alfa Romeo",
    "wins" : 10
  },
  {
    "id" : 12,
    "name": "Guanyu Zhou",
    "number": 24,
    "championships": 0,
    "continent" : "Asia",
    "puntuacion" : 2.5,
    "team": "Alfa Romeo",
    "wins" : 0
  },
  {
    "id" : 13,
    "name": "Kevin Magnussen",
    "number": 20,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 3,
    "team": "Haas",
    "wins" : 0
  },
  {
    "id" : 14,
    "name": "Nico Hulkenberg",
    "number": 27,
    "championships": 0,
    "continent" : "No",
    "puntuacion" : 0,
    "team": "Haas",
    "wins" : 0
  },
  {
    "id" : 15,
    "name": "Yuri Tsunoda",
    "number": 22,
    "championships": 0,
    "continent" : "Asia",
    "puntuacion" : 3,
    "team": "Alpha Tauri",
    "wins" : 0
  },
  {
    "id" : 16,
    "name": "Nyck de Vries",
    "number": 21,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 2.5,
    "team": "Alpha Tauri",
    "wins" : 0
  },
  {
    "id" : 17,
    "name": "Fernando Alonso",
    "number": 14,
    "championships": 2,
    "continent" : "Europe",
    "puntuacion" : 5,
    "team": "Aston Martin",
    "wins" : 32
  },
  {
    "id" : 18,
    "name": "Lance Stroll",
    "number": 18,
    "championships": 0,
    "continent" : "Europe",
    "puntuacion" : 3.5,
    "team": "Aston Martin",
    "wins" : 0
  },
  {
    "id" : 19,
    "name": "Alexander Albon",
    "number": 23,
    "championships": 0,
    "continent" : "Asia",
    "puntuacion" : 3,
    "team": "Williams",
    "wins" : 0
  },
  {
    "id" : 20,
    "name": "Logan Sargeant",
    "number": 2,
    "championships": 0,
    "continent" : "No",
    "puntuacion" : 0,
    "team": "Williams",
    "wins" : 0
  }
]}

app.get('/', (req, res) => {
    res.send('Node JS api');
  });

  
app.get('/api/pilots', (req, res) => {
  res.send(pilots.pilots);
  });

app.get('/api/pilot/:id', (req, res) => {
    console.log(pilots.pilots)
    const pilot = pilots.pilots.find(c => c.id === parseInt(req.params.id));
    if(!pilot) return res.status(404).send('Equipo no encontrado')
    else res.send(pilot)
});

app.get('/api/pilot/:team', (req,res) => {
    const country = pilots.pilots.filter(c => c.team == req.params.team);
    if(!country) return res.status(404).send('Equipo no encontrado')
    else res.send(country)
})



const port = 82;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`))