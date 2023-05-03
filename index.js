const express = require('express')
const app = express()
const cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require('./data/chefsRecipe.json')
app.use(cors());
app.get('/', (req, res) => {
  res.send('The chefs recipe server running,,,')
})
app.get("/chefs", (req, res) => {
    res.send(chefs);
});
app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefs.find(c => c.id === id);
  res.send(selectedChef);
})
app.listen(port, () => {
    console.log(`The chefs recipe api server running,,,' ${port}`);
})