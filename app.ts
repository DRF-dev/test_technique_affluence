import * as express from "express"
import * as http from "http"
import * as methodOverride from "method-override"
import { urlencoded } from "body-parser"

import db from "./model/db"
import notes from "./routes/notes"

const app = express()

//Connection à la base de donnée
db.connect(err => {
    if(err) return console.log(err)
    console.log("Base de donnée connecté avec succès")
})

app.use(urlencoded({ extended: false }))
    .use(methodOverride('_method'))
    .use('/', notes)


const PORT = 4000
const server = http.createServer(app)
server.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`))