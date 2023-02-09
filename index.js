const express = require('express')
const app = express();

app.use(express.json())
const teams = {
    "teams": [
      { "id" : 1,
        "name": "Mercedes",
        "nationality": "Germany",
        "drivers": [
          {
            "id" : 1,
            "name": "Lewis Hamilton",
            "number": 44,
            "championships": 7,
            "continent" : "Europe"
          },
          {
            "id" : 2,
            "name": "George Russell",
            "number": 63,
            "championships": 0,
            "continent" : "Europe"
          }
        ]
      },
      { "id" : 2,
        "name": "Red Bull Racing",
        "nationality": "Austria",
        "drivers": [
          {
            "id" : 3,
            "name": "Max Verstappen",
            "number": 33,
            "championships": 0,
            "continent" : "Europe"
          },
          {
            "id" : 4,
            "name": "Sergio Perez",
            "number": 11,
            "championships": 0,
            "continent" : "America"
          }
        ]
      },
      { "id" : 3,
        "name": "Ferrari",
        "nationality": "Italia",
        "drivers": [
          {
            "id" : 5,
            "name": "Charles Leclerc",
            "number": 44,
            "championships": 7,
            "continent" : "Europe"
          },
          {
            "id" : 6,
            "name": "Carlos Sainz",
            "number": 77,
            "championships": 0,
            "continent" : "Europe"
          }
        ]
      },
      { "id" : 4,
        "name": "Alpine",
        "nationality": "France",
        "drivers": [
          {
            "id" : 7,
            "name": "Esteban Ocon",
            "number": 44,
            "championships": 7,
            "continent" : "Europe"
          },
          {
            "id" : 8,
            "name": "Pierre Gasly",
            "number": 77,
            "championships": 0,
            "continent" : "Europe"
          }
        ]
      },
      { "id" : 5,
        "name": "McLaren",
        "nationality": "Great Britain",
        "drivers": [
          {
            "id" : 9,
            "name": "Lando Norris",
            "number": 44,
            "championships": 7,
            "continent" : "Europe"
          },
          {
            "id" : 10,
            "name": "Oscar Piastri",
            "number": 77,
            "championships": 0,
            "continent" : "Oceania"
          }
        ]
      },
      { "id" : 6,
        "name": "Alfa Romeo",
        "nationality": "Switzerland",
        "drivers": [
          {
            "id" : 11,
            "name": "Valtteri Botas",
            "number": 44,
            "championships": 7,
            "continent" : "Europe"
          },
          {
            "id" : 12,
            "name": "Guanyu Zhou",
            "number": 77,
            "championships": 0,
            "continent" : "Asia"
          }
        ]
      },
      { "id" : 7,
        "name": "Haas",
        "nationality": "USA",
        "drivers": [
          {
            "id" : 13,
            "name": "Kevin Magnussen",
            "number": 44,
            "championships": 7,
            "continent" : "Europe"
          },
          {
            "id" : 14,
            "name": "PEB",
            "number": 77,
            "championships": 0,
            "continent" : "No"
          }
        ]
      },
      { "id" : 8,
        "name": "Alpha Tauri",
        "nationality": "Italia",
        "drivers": [
          {
            "id" : 15,
            "name": "Yuri Tsunoda",
            "number": 44,
            "championships": 7,
            "continent" : "Asia"
          },
          {
            "id" : 16,
            "name": "Nyck de Vries",
            "number": 77,
            "championships": 0,
            "continent" : "Europe"
          }
        ]
      },
      { "id" : 9,
        "name": "Aston Martin",
        "nationality": "Great Britain",
        "drivers": [
          {
            "id" : 17,
            "name": "Fernando Alonso",
            "number": 44,
            "championships": 7,
            "continent" : "Europe"
          },
          {
            "id" : 18,
            "name": "Lance Stroll",
            "number": 77,
            "championships": 0,
            "continent" : "Europe"
          }
        ]
      },
      { "id" : 10,
        "name": "Mercedes",
        "nationality": "Germany",
        "drivers": [
          {
            "id" : 19,
            "name": "Alexander Albon",
            "number": 44,
            "championships": 7,
            "continent" : "Europe"
          },
          {
            "id" : 20,
            "name": "PEB",
            "number": 77,
            "championships": 0,
            "continent" : "No"
          }
        ]
      },
    ]
  }

  app.get('/', (req, res) => {
    res.send('Node JS api');
  });

  app.get('/api/teams', (req, res) => {
    res.send(teams);
  });

  app.get('/api/teams/:id', (req, res) => {
    const team = teams.teams.find(c => c.id === parseInt(req.params.id));
    if(!team) return res.status(404).send('Equipo no encontrado')
    else res.send(team)
})

  app.get('/api/teams/country/:nationality', (req, res) => {
    const country = teams.teams.filter(c => c.nationality == req.params.nationality);
    if(!country) return res.status(404).send('Equipo no encontrado')
    else res.send(country)
  })

  app.get('/api/teams/pilots/:id', (req, res) => {
    const pilot = teams.teams.find(c => c.drivers.find(e => e.id === parseInt(req.params.id)))
    if (!pilot) return res.status(404).send('Equipo no encontrado')
    else res.send(pilot.drivers.find(e => e.id === parseInt(req.params.id)))
  })

  app.get('/api/teams/pilots/continent/:continent', (req, res) => {
    const pilot = teams.teams.filter(c => c.drivers.filter(e => e.continent === req.params.continent))
    if (!pilot) return res.status(404).send('Equipo no encontrado')
    else res.send(pilot.drivers.filter(e => e.continent === req.params.continent))
  })     


  const port = 81;
  app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`))