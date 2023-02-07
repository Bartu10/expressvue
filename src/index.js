const express = require('express')
const app = express();

app.use(express.json())
const teams = {
    "teams": [
      { "id" : 1,
        "name": "Mercedes",
        "nationality": "German",
        "drivers": [
          {
            "id" : 1,
            "name": "Lewis Hamilton",
            "number": 44,
            "championships": 7
          },
          {
            "id" : 2,
            "name": "George Russell",
            "number": 63,
            "championships": 0
          }
        ]
      },
      { "id" : 2,
        "name": "Red Bull Racing",
        "nationality": "Austrian",
        "drivers": [
          {
            "id" : 3,
            "name": "Max Verstappen",
            "number": 33,
            "championships": 0
          },
          {
            "id" : 4,
            "name": "Sergio Perez",
            "number": 11,
            "championships": 0
          }
        ]
      },
      { "id" : 3,
        "name": "Ferrari",
        "nationality": "Italian",
        "drivers": [
          {
            "id" : 5,
            "name": "Charles Leclerc",
            "number": 44,
            "championships": 7
          },
          {
            "id" : 6,
            "name": "Carlos Sainz",
            "number": 77,
            "championships": 0
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
            "championships": 7
          },
          {
            "id" : 8,
            "name": "Pierre Gasly",
            "number": 77,
            "championships": 0
          }
        ]
      },
      { "id" : 5,
        "name": "McLaren",
        "nationality": "British",
        "drivers": [
          {
            "id" : 9,
            "name": "Lando Norris",
            "number": 44,
            "championships": 7
          },
          {
            "id" : 10,
            "name": "Oscar Piastri",
            "number": 77,
            "championships": 0
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
            "championships": 7
          },
          {
            "id" : 12,
            "name": "Guanyu Zhou",
            "number": 77,
            "championships": 0
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
            "championships": 7
          },
          {
            "id" : 14,
            "name": "PEB",
            "number": 77,
            "championships": 0
          }
        ]
      },
      { "id" : 8,
        "name": "Alpha Tauri",
        "nationality": "Italian",
        "drivers": [
          {
            "id" : 15,
            "name": "Yuri Tsunoda",
            "number": 44,
            "championships": 7
          },
          {
            "id" : 16,
            "name": "Nyck de Vries",
            "number": 77,
            "championships": 0
          }
        ]
      },
      { "id" : 9,
        "name": "Aston Martin",
        "nationality": "British",
        "drivers": [
          {
            "id" : 17,
            "name": "Fernando Alonso",
            "number": 44,
            "championships": 7
          },
          {
            "id" : 18,
            "name": "Lance Stroll",
            "number": 77,
            "championships": 0
          }
        ]
      },
      { "id" : 10,
        "name": "Mercedes",
        "nationality": "German",
        "drivers": [
          {
            "id" : 19,
            "name": "Alexander Albon",
            "number": 44,
            "championships": 7
          },
          {
            "id" : 20,
            "name": "PEB",
            "number": 77,
            "championships": 0
          }
        ]
      },
    ]
  }

  app.get('/', (req, res) => {
    res.send('Node JS api');
  });

  app.get('/api/teams', (req, res) => {
    res.send(students);
  });

  app.get('/api/teams/:id', (req, res) => {
    const team = teams.find(c => c.id === parseInt(req.params.id));
    if(!team) return res.status(404).send('Equipo no encontrado')
    else res.send(student)
})

  app.get('/api/teams/:country', (req, res) => {
    
  })