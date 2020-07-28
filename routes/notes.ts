import { Router } from "express"
import { addNotes, allNotes, modifyNotes, deleteNotes, oneNote } from "../controllers/notesController"

const router = Router()

router.get('/', allNotes)
    .post('/add', addNotes)
    .put('/modify', modifyNotes)
    .delete('/remove', deleteNotes)
    .post('/viewone', oneNote)

export default router