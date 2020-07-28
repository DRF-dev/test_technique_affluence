import { createConnection } from "mysql"

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "entetien_technique"
})

export default db