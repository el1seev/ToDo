const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        length: 20,
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    },
}, { timestamps: true });

noteSchema.pre('save', async function(next){
    let date = Date.parse(this.date);
    if(+date < +Date.now()){
        next('Entered data is less than todays');
    } else {
        next()
    }
});


const Note = mongoose.model('Note', noteSchema);
module.exports = Note;