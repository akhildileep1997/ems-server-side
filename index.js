// 1 import express
const express = require('express')

// 2 import cors
const cors = require('cors')

// 7 import logic file here
const logic = require('./services/logic')

// 3 create a server application using express
const server = express()

//4 use cors
server.use(cors({
    origin:'http://localhost:3000'
}))

//5 json-format communication
server.use(express.json())

//6 set the port for running server
const PORT = 8000
server.listen(PORT,()=>{
    console.log('server is listening in port '  + PORT);
})

//8 api call for allEmployees from logic
server.get('/get-employees',(req,res)=>{
    console.log('inside get employee api');
    logic.allEmployees().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//9 api call for adding new employee to mongodb
server.post('/addEmployee',(req,res)=>{
    console.log('inside add employee api');
    logic.addEmployees(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//10 deleting employee api
server.delete('/deleteEmployee/:id',(req,res)=>{
    console.log('inside delete employee api');
    logic.deleteEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//11 fetching particular employee details
server.get('/getAnEmployee/:id',(req,res)=>{
    console.log('inside particular employee api');
    logic.getAnEmp(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//12 update employee details
server.post('/updateAnEmployee/:id',(req,res)=>{
    console.log('inside update employee api');
    logic.updateEmployee(req.params.id,req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})