const express=require('express')
const router=express.Router()
const userController=require('../app/controllers/UsersController')
const phonebookController=require('../app/controllers/phonebookController')
const {authenticateUser}=require('../app/middlewares/authentication')


router.post('/users/register',userController.register)
router.post('/users/login',userController.login)
router.post('/contact/create',authenticateUser,phonebookController.create)
router.put('/contact/:id',authenticateUser,phonebookController.update)
router.get('/contact/list',authenticateUser,phonebookController.list)
router.get('/contact/:id',authenticateUser,phonebookController.show)
router.delete('/contact/:id',authenticateUser,phonebookController.destroy)



module.exports=router