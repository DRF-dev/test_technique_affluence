import * as express from "express"
import * as http from "http"
import * as methodOverride from "method-override"
import { join } from "path"
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
    .use(express.static(join(__dirname, "client/build")))
    .get('/', (req: express.Request, res: express.Response) => {
        res.sendFile(join(__dirname, './client/build/index.html'))
    })
    .use('/api', notes)


const PORT = 4000
const server = http.createServer(app)
server.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`))