const mongoose=require('mongoose')
require('mongoose-double')(mongoose)
var SchemaTypes = mongoose.Schema.Types

const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    dateOfBirth:{
        type:Date,
    },
    gender:{
        type:String,
    },
    salary:{
        type:SchemaTypes.Double,
    }
},{
    timestamps:true,
})

module.exports=mongoose.model('Employee',EmployeeSchema)