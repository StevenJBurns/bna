/* Node Dependencies */
const path = require("path");
const http = require("http");

/* External Dependencies */
const chalk = require("chalk");
const express = require("express");
const logger = require("morgan");

/* Local Dependencies */
/* Two distinct Express Router objects for /auth and /api */
const routerUser = require("./routers/routerUser.js");
const routerGame = require("./routers/routerGame.js");


/* Connect .env file values to Node process.env */
require("dotenv").config();

/* Clear the console and create the Express server */
const server = new express();
console.clear();

/* Morgan Middleware for logging */
server.use(logger("dev"));

/* Express 4.16 now has native middleware for req.body without body-parser */
server.use(express.json());

/* Routers to catch /user and /game routes */
server.use("/user", routerUser);
server.use("/game", routerGame);


server.listen(process.env.PORT || 8000, () => {
  console.log(chalk.bgWhite.black(`  Express Server Started on Port ${process.env.PORT}  `))
});
