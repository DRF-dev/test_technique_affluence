import { Request, Response } from "express"
import db from "../model/db"

const allNotes = (req: Request, res: Response) => {
    let query = "SELECT * FROM `notes`"
    db.query(query, (err, data) => {
        try {
            return res.status(200).render('view.ejs', { data: data })
        } catch (error) {
            console.log(error)
            console.log(err)
            return res.redirect('/')
        }
    })
}

const addNotes = (req: Request, res: Response) => {
    const { titre, description, date_echeance } = req.body
    let query = "INSERT INTO `notes` (titre, description, date_echeance) VALUE ('" + titre + "', '" + description + "', '" + date_echeance + "')"
    db.query(query, (err) => {
        if(err) return console.log(err)
        console.log("Note enrengistré avec succès")
    })
    return res.redirect("/")
}

const modifyNotes = (req: Request, res: Response) => {
    const { id, titre, description, date_echeance } = req.body
    let query = "UPDATE notes SET titre='" + titre + "', description='" + description + "', date_echeance='" + date_echeance + "' WHERE id='"+ id + "'"
    db.query(query, err => {
        if(err) return console.log(err)
        console.log("Note modifié avec succès")
    })
    return res.redirect('/')
}

const deleteNotes = (req: Request, res: Response) => {
    const { titre } = req.body
    let query = "DELETE FROM `notes` WHERE `titre`='" + titre + "'"
    db.query(query, (err) => {
        if(err) return console.log(err)
        console.log("Note supprimé avec succès")
    })
    return res.redirect("/")
}

const oneNote = (req: Request, res: Response) => {
    const { id } = req.body
    let query = "SELECT * FROM notes WHERE id="+ id
    db.query(query, (err, data) => {
        try {
            return res.status(200).render('one.ejs', { data: data })
        } catch (error) {
            console.log("Erreur au moment de l'enrengistrement", err)
            console.log("Erreur au moment de la redirection", error)
            return res.status(500).redirect('/')
        }
    })
}

export { addNotes, allNotes, modifyNotes, deleteNotes, oneNote }