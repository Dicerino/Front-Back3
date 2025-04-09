const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8080;
const productsPath = path.join(__dirname, 'data', 'products.json');

function readData() {
  return JSON.parse(fs.readFileSync(productsPath, 'utf8'));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/products', (req, res) => {
  const data = readData();
  res.json(data.products);
});

app.listen(PORT, () => {
  console.log(`Shop server on port ${PORT}`);
});
