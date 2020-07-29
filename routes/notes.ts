import { Router } from "express"
import { addNotes, allNotes, modifyNotes, deleteNotes, oneNote } from "../controllers/notesController"

const router = Router()

router.get('/', allNotes)
    .post('/', addNotes)
    .put('/:id', modifyNotes)
    .delete('/:id', deleteNotes)
    //.post('/:id', oneNote)
    .get('/:id', oneNote)

export default router