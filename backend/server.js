require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Simple route
app.get('/', (req, res) => res.send('API fonctionnelle 🚀'));

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
