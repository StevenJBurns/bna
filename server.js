/* Node Dependencies */
const path = require("path");
const http = require("http");

/* External Dependencies */
const chalk = require("chalk");
const express = require("express");


/* Connect .env file values to Node process.env */
require("dotenv").config();

/* Clear the console and create the Express server */
const server = new express();
console.clear();

/* Morgan Middleware for logging */
server.use(logger("dev"));

/* Express 4.16 now has native middleware for req.body without body-parser */
server.use(express.json());

server.listen(process.env.PORT || 8000, () => {
  console.log(chalk.bgWhite.black(`  Express Server Started on Port ${process.env.PORT}  `))
});
