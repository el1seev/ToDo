const express = require('express');

const {
    addNote, editNote, deleteNote, getNotes
    } = require('../controllers/todo-controller');


const router = express.Router();

router.get('/api/get_notes', getNotes);
router.post('/api/add_note', addNote);
router.put('/api/edit_note', editNote);
router.delete('/api/delete_note', deleteNote);

module.exports = router;