const express = require("express");
const jsonfile = require("jsonfile");
const app = express();
const port = process.env.PORT;

// Middleware to parse JSON data in request body
app.use(express.json());

// Get a list of all users
app.get("/users", (req, res) => {
  jsonfile.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    res.json(data.users);
  });
});
// Get a single user by ID
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  jsonfile.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    const user = data.users.find((u) => u.id === id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  });
});
// Update an existing user
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const updateUser = req.body;
  jsonfile.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    const userIndex = data.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }
    const updatedUser = { ...data.users[userIndex], ...updateUser };
    data.users[userIndex] = updatedUser;
    jsonfile.writeFile("users.json", data, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      res.json(updatedUser);
    });
  });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  jsonfile.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    const userIndex = data.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }
    const deletedUser = data.users[userIndex];
    data.users.splice(userIndex, 1);
    jsonfile.writeFile("users.json", data, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      res.json(deletedUser);
    });
  });
});
//Create a user
app.post("/users", (req, res) => {
  const newUser = req.body;
  jsonfile.readFile("users.json", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    const ids = data.users.map((u) => parseInt(u.id));
    const maxId = Math.max(...ids);
    const newId = (maxId > 0 ? maxId : 0) + 1;
    newUser.id = newId.toString();
    data.users.push(newUser);
    jsonfile.writeFile("users.json", data, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      res.status(201).json(newUser);
    });
  });
});

//Get if user exists
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  jsonfile.readFile("users.json", (error, data) => {
    const user = data.users.find(user => user.email === email && user.password == password);
    if (user) {
      res.status(200).json({ message: 'successful'});
    } else {
      console.log(error)
      res.status(401).json({ message: 'Invalid email or password' });
    }
  })
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});