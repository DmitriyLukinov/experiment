const express = require("express");
const path = require("path");
const app = express();

app.get('/dist/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'bundle.js'));
});

app.use(express.static(path.join(__dirname, "public")));

app.get('/send', (req, res) => {
  res.send('GET request received!');
});

app.listen(443, () => {
  console.log(`Server started at 443`);
});