const {request, response } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3010;

const mongoose=require('mongoose');

const userController = require('./controllers/userController');

app.use(express.json());
app.post('/user',userController.addUser);
app.get('/user', userController.getAllUsers);
app.patch('/user/:UserId',userController.updateById);
app.delete('/user/:UserId',userController.deleteById);
app.get('/user/:UserId',userController.getUserbyId);

app.listen(PORT,() => {
    console.log("My server is up and running on port 3010");
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("Database is connected");
    })
    .catch(function(error){
        console.log(`Database not connected, ${error}`);
    });
});