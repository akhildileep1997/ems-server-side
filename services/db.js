// 1 import mongoose
const mongoose = require('mongoose')

//2 connect with mongodb
mongoose.connect('mongodb://localhost:27017/ems')

//3 create a model corresponds to mongodb
const Employee =  mongoose.model('Employee',{
    id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:Number
})

// 4 export model so that can be used by other files
module.exports={
    Employee
}