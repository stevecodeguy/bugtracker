const mongoose = require('../controllers/data/db_connect');

const bugSchema = mongoose.createSchema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    completed: {type: Boolean, default: false},
    created: {type: Date, default: () => new Date()}
});

const Bug = module.exports = mongoose.Model('bug', bugSchema);