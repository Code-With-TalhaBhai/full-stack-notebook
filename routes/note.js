import express from 'express';
import { addNote, deleteNote, editNote, fetchAllNotes, fetchUserNote } from '../iController/NotesController.js';
import fetchUserMid from '../Middleware/fetchUserMid.js';
import { body, validationResult } from 'express-validator';


const router = express.Router();

router.get('/',fetchAllNotes);

// SINGLE USER NOTES
router.get('/mynotes',fetchUserMid,fetchUserNote);

// ADDING NOTES
router.post('/addnote',fetchUserMid,[
body('title','Title must be atleast 3').isLength({ min: 3 }),
body('description','Description must by atleast 5 characters.').isLength({ min: 5 })],addNote);

// EDITING NOTES
router.put('/editnote/:id',fetchUserMid,
[body('title','Title must be atleast 3').optional().isLength({ min: 3 }),
body('description','Description must by atleast 5 characters.').isLength({ min: 5 })],
editNote);

router.delete('/deletenote/:id',fetchUserMid, deleteNote);



export default router;