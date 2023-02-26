const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task : {
        type : String,
        require:  true
    },
    category : {
        type : String,
        require:  true
    },
    date:{
        type: String,
        require:true
    }
});

// model() is for Collection
const Tasks = mongoose.model('Task', taskSchema);

module.exports = Tasks;
