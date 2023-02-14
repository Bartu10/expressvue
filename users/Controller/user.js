const User = require('../model/user');

// Función para registrar un usuario
exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear el usuario
    const user = new User({ username, password, email });
    await user.save();

    return res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el usuario', error });
  }
};

// Función para autenticar un usuario
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar el usuario por el nombre de usuario y verificar si la contraseña es correcta
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    return res.status(200).json({ message: 'Usuario autenticado exitosamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al autenticar el usuario', error });
  }
};

// Función para obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};

// Función para obtener un usuario por su ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};

// Función para actualizar un usuario por su ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.status(200).json({ message: 'Usuario actualizado exitosamente', user });
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
};

// Función para eliminar un usuario