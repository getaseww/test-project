const router=require('express').Router()
const {create,fetchAll,show,update,remove}=require('./controller/employeeController')

router.route('/employee/create').post(create)
router.route('/employees').get(fetchAll)
router.route('/employee/:id').get(show).put(update).delete(remove)

module.exports=router

