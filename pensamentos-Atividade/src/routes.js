const express = require("express");
const ThoughtsController = require("./controllers/ThoughtsController");

const UserController = require("./controllers/UserController");
const Thought = require("./model/Thought");

const router = express.Router();

router.post("/users", UserController.createUsers);
router.get("/users", UserController.findAllUsers);
router.get("/users/:id", UserController.findUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

// Rotas Pensamentos
router.post("/thoughts", ThoughtsController.createThought);
router.get("/thoughts", ThoughtsController.findAllThoughts);
router.get("/thoughts/:id", ThoughtsController.findThought);
router.put("/thoughts/:id", ThoughtsController.updateThought);
router.delete("/thoughts/:id", ThoughtsController.deleteThought);

module.exports = router;