const express = require('express');
const routes = express.Router();

const basePath = __dirname + "/views"

routes.get('/', (request, response) => response.sendFile(basePath + "/index.html"))

// routes.get("/job", (request, response) => )
// routes.get("/job/edit", (request, response) => )
// routes.get("/profile", (request, response) => )

module.exports = routes;