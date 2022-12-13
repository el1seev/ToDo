const Note = require('../model/noteSchema');
const fixDate = require('../utils/fixDate');

const handleError = (res, error) => {
    console.log(error);
    res.json({error: error});
}

const getNotes = (req, res) => {
    Note
        .find()
        .sort({ date: +1 })
        .then((notes) => res.status(200).json({notes: notes}))
        .catch((error) => handleError(res, error));
}

const addNote = (req, res) => {
    const { name, description, date } = req.body;
    const newDate = fixDate(date);
    const note = new Note({ name: name, description: description, date: newDate });
    note
        .save()
        .then((result) => res.status(200).json(
            {
                success: true, 
                result: `The ${result.name} was added`
            }
        ))
        .catch((error) => handleError(res, error));
}

const deleteNote = (req, res) => {
    Note
        .findByIdAndDelete(req.body._id)
        .then((result) => res.status(200).json(
            {
                success: true, 
                result: `The ${result.name} was deleted`
            }
        ))
        .catch((error) => handleError(res, error));
}

const editNote = (req, res) => {
    const { _id, name, description, date } = req.body;
    Note
        .findByIdAndUpdate(_id, { name, description, date })
        .then((result) => res.status(200).json(
            {
                success: true,
                result: `The ${result.name} note has changed`
            }
        ))
        .catch((error) => handleError(res, error));
}

module.exports = {
    getNotes,
    addNote,
    deleteNote,
    editNote
};