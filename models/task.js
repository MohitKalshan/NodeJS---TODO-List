const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    // For Description
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
const TaskList = mongoose.model('TaskList', taskSchema);

module.exports = TaskList;
