const express = require("express")
const server = express()
const routes = require("./routes")

//  Habilitar arquivos estáticos
server.use(express.static("public"))

// Routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))