const res = require('express/lib/response');
const userModels = require('../models/userModels');

async function addUser(request,response){
    try {
       const newUser = await userModels.create(request.body);
       response.status(200).json(newUser);
    } catch(error){
        console.log("Something went wrong",error.message);
    }
}
async function getAllUsers(request,response){
   try{
       const getAll = await userModels.find();
       response.status(200).json(getAll);
   } catch(err){
       console.log("Something went wrong",err.message);
       response.status(400);
   }
}

async function getUserbyId(request,response){
    try{
        const fetchuser = await userModels.findById(request.params.todoId);
        response.status(200).json(fetchuser);
    }catch(error){
        console.log("Something went wrong".error.message);
    }
}

async function updateById(request,response){
   try{
    const update = await userModels.findByIdAndUpdate(request.params.todoId,request.body);
    response.status(200).json(update);
   } catch(error){
       console.log("Something went wrong".error.message);

   }
}
async function deleteById(req,res){
    try{
    await userModels.findByIdAndDelete(req.params.todoId);
    res.status(200).json({message:"todo deleted"});

    }catch(err){
        console.log("Something went wrong",err.message);
        res.status(401).json();
    }

}

module.exports ={
    addUser,
    getAllUsers,
    updateById,
    deleteById,
    getUserbyId,
}