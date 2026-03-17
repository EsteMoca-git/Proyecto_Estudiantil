const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// Conexión a MongoDB local
mongoose.connect('mongodb://127.0.0.1:27017/ingles')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Esquema común
const sectionSchema = new mongoose.Schema({
  id: String,
  title: String,
  items: [
    {
      id: String,
      name: String,
      route: String,
      content: String,
      component: String,
      theory: {
        description: String,
        formula: {
          affirmative: String,
          negative: String,
          question: String
        },
        examples: [String]
      }
    }
  ]
});

// Modelos para cada colección
const Basic = mongoose.model('Basic', sectionSchema, 'basic');
const Intermediate = mongoose.model('Intermediate', sectionSchema, 'intermediate');
const Advanced = mongoose.model('Advanced', sectionSchema, 'advanced');
const Beginners = mongoose.model('Beginners', sectionSchema, 'beginners');

// Rutas API
app.get('/', (req, res) => {
  res.send('Bienvenidos al servidor Aprende Inglés 💻');
});

app.get('/basic', async (req, res) => {
  const data = await Basic.find();
  res.json(data);
});

app.get('/intermediate', async (req, res) => {
  const data = await Intermediate.find();
  res.json(data);
});

app.get('/advanced', async (req, res) => {
  const data = await Advanced.find();
  res.json(data);
});

app.get('/beginners', async (req, res) => {
  const data = await Beginners.find();
  res.json(data);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto: ${PORT}`);
});
