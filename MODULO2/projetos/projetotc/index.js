require("dotenv").config();
const { application } = require("express");
const express = require("express");
const res = require("express/lib/response");
const path = require("path");
const { fileURLToPath } = require("url");
const app = express();
const routes = require("./src/routes/routes");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Servidor rodando em ${port}`));