const express = require('express')
const app = express();

app.use(express.json())
const teams = {
    "teams": [
      { "id" : 1,
        "name": "Mercedes",
        "nationality": "Germany",
        "puntuacion" : 5,
        "logo" : "https://www.formulaf1.es/wp-content/uploads/2012/03/mercedes-f1-218x150.jpeg",
      },
      { "id" : 2,
        "name": "Red Bull Racing",
        "nationality": "Austria",
        "puntuacion" : 5,
        "logo" : "https://www.formulaf1.es/wp-content/uploads/2012/01/red-bull-f1-218x150.jpeg",
      },
      { "id" : 3,
        "name": "Ferrari",
        "nationality": "Italia",
        "puntuacion" : 4.5,
        "logo": "https://www.formulaf1.es/wp-content/uploads/2012/01/147ferrari_logo.jpg",
      },
      { "id" : 4,
        "name": "Alpine",
        "nationality": "France",
        "puntuacion" : 3,
        "logo" : "https://www.formulaf1.es/wp-content/uploads/2016/03/alpine-f1-218x150.jpeg",
      },
      { "id" : 5,
        "name": "McLaren",
        "nationality": "Great Britain",
        "puntuacion" : 3.5,
        "logo" : "https://www.formulaf1.es/wp-content/uploads/2012/03/logo-mclaren.jpg",
      },
      { "id" : 6,
        "name": "Alfa Romeo",
        "nationality": "Switzerland",
        "puntuacion" : 1.5,
        "logo" : "https://www.formulaf1.es/wp-content/uploads/2019/02/alfa-1-e1554172483411-218x150.jpg",
      },
      { "id" : 7,
        "name": "Haas",
        "nationality": "USA",
        "puntuacion" : 1,
        "logo" : "https://www.formulaf1.es/wp-content/uploads/2016/03/HaasF1Team-Logo.jpg",
      },
      { "id" : 8,
        "name": "Alpha Tauri",
        "nationality": "Italia",
        "puntuacion" : 2.5,
        "logo" : "https://www.formulaf1.es/wp-content/uploads/2012/03/alphatauri-f1-218x150.jpeg",
      },
      { "id" : 9,
        "name": "Aston Martin",
        "nationality": "Great Britain",
        "puntuacion" : 2,
        "logo":"https://www.formulaf1.es/wp-content/uploads/2012/03/aston-martin-f1-218x150.png",
      },
      { "id" : 10,
        "name": "Williams",
        "nationality": "Germany",
        "puntuacion" : 1,
        "logo" : "https://www.formulaf1.es/wp-content/uploads/2012/03/williams-f1-218x150.jpeg",
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





  const port = 81;
  app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`))