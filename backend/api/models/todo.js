import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    title:{
        type: String,
        required: "title is required"
    },
    description:{
        type: String,
    },
    dueDate:{
        type: String,
        
    },
    createdDate:{
        type: Date,
        default: Date.now
    },
    lastModifiedDate:{
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false,
        
    }
},{ versionKey: false });

Schema.virtual('id',() => this._id.toHexString());
Schema.set('toJSON', { virtuals: true }); // converts an object to JSON

// create model from the schema
const model = mongoose.model('todo', Schema);

export default model;