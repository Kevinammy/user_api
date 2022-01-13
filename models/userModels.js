
const mongoose  =require('mongoose');

const todoSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    dob:Date,
    gender:String,
    contact:Number,
    isCompletedSchool:Boolean,
})

const todoModel = mongoose.model('userinterface',todoSchema);

module.exports = todoModel;