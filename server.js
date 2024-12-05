const express = require("express");
const app = express();
const port = 80;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Servidor  rodando!");
});
app.get("/on", (req, res) => {
  res.send("Ligando ar-condicionado");
});
app.get("/off", (req, res) => {
  res.send("Desligando ar-condicionado");
});
app.listen(port, () => console.log("Servidor rodando"));
