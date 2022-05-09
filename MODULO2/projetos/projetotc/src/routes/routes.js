const routes = require('express').Router();
const PokemonController = require("../controllers/PokemonController");



routes.get("/", PokemonController.getAll);
routes.get("/cadastro", PokemonController.cadastro);
routes.post("/create", PokemonController.create);
routes.get("/getById/:id/:method", PokemonController.getById);
routes.post("/update/:id", PokemonController.update);
routes.get("/remove/:id", PokemonController.remove);


module.exports = routes;