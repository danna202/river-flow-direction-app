
const path = require('path');

// ...

app.get('/map', (req, res) => {
  const mapFilePath = path.join(__dirname, './templatets/map.html');
  res.sendFile(mapFilePath);
});

