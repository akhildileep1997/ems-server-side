// 1 import db.js to get the model
const db = require('./db')


//2 first logic get all the employee details from mongo db
const allEmployees = ()=>{
    return db.Employee.find().then(result=>{
        if(result)
        {
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'no data found'
            }
        }
    })
}

// adding employee
const addEmployees = (id,name,age,designation,salary) =>{
    return db.Employee.findOne({id}).then(result=>{
        if(result)
        {
            return{
                statusCode:401,
                message:'employee id already exist '
            }
        }else{
            const newEmployee = new db.Employee({
             id,
             name,
             age,
             designation,
             salary
            })
            newEmployee.save()  //to save into database
            return{
                statusCode:200,
                message:'employee added successfully'
            }
        }
    })
}

// deleting employee
const deleteEmployee = (_id) =>{
    return db.Employee.deleteOne({_id}).then((result)=>{
        if(result)
        {
            return{
                statusCode:200,
                message:'employee deleted successfully'
            }
        }else{
            return{
                statusCode:404,
                message:'cannot find the employee'
            }
        }
    })
}

//logic for getting particular employee details
const getAnEmp = (id) =>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
    })
}

//logic for updating particular employee details
const updateEmployee = (Id,id,name,age,designation,salary) =>{
   return db.Employee.findOne({id:Id}).then((result)=>{
    if(result)
    { 
        result.id=id;
        result.name=name;
        result.age=age;
        result.designation=designation;
        result.salary=salary
        result.save() //update in mongodb
        return{
            statusCode:200,
            message:'details has been updated'
        }
    }else{
        return{
            statusCode:401,
            message:'cannot find the employee id'
        }
    }
   }) 
}

module.exports={
    allEmployees,
    addEmployees,
    deleteEmployee,
    getAnEmp,
    updateEmployee
}
