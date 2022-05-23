const Employee=require('../model/Employee')

const create=async(req,res)=>{
    const {name,dateOfBirth,gender,salary}=req.body

    if(!name||!dateOfBirth||!gender||!salary){
        res.status(401).json({
            message:"All fields are required!",
        })
    }else{
        try {
            const newEmployee=new Employee(req.body)

            const result=await newEmployee.save()
            if(result){
                res.status(201).json({
                    data:result,
                    message:"Employee data submited successfully!",
                })
            }else{
                res.status(500).json({
                    message:"Something went wrong while creating eployee data!"
                })
            }
        } catch (error) {
            res.status(500).json({
                error,
                message:"Something went wrong!"
            })
        }
    }
}

const fetchAll=async(req,res)=>{
    try {
        const data=await Employee.find()
        if(data){
            res.status(200).json({
                data,
                message:"Employee information fetched successfully!"
            })
        }else{
            res.status(500).json({
                message:"Something went wrong!",
            })
        }
    } catch (error) {
        res.status(500).json({
            error,
            message:"Something went wrong!",
        })
    }
}

const show=async(req,res)=>{
    const id=req.params.id
    try {
        const data=await Employee.findById(id)
        if(data){
            res.status(200).json({
                data,
                message:"Employee data fetched successfully!",
            })
        }else{
            res.status(500).json({
                message:"Something went wrong!",
            })
        }
    } catch (error) {
        res.status(500).json({
            error,
            message:"Something went wrong!",
        })
    }
}

const update=async(req,res)=>{
    const id=req.params.id
    try {
        const employee=await Employee.findById(id)
        const result=await employee.updateOne({$set:req.body})
        if(result){
            res.status(200).json({
                message:"Employee data updated successfully!",
            })
        }else{
            res.status(500).json({
                message:"Something went wrong!"
            })
        }
    } catch (error) {
        res.status(500).json({
            error,
            message:"Something went wrong!",
        })
    }
}

const remove=async(req,res)=>{
    const id=req.params.id
    try {
        const employee=await Employee.findById(id)
        const result=employee.deleteOne()
        if(result){
            res.status(200).json({
                message:"Employee data deleted successfully!"
            })
        }else{
            res.status(500).json({
                message:"Something went wrong while deleting the data!"
            })
        }
    } catch (error) {
        res.status(500).json({
            error,
            message:"Something went wrong!"
        })
    }
}

module.exports={
    create,
    fetchAll,
    show,
    update,
    remove
}