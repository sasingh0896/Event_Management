 const adminController = require('./controller/adminController')
 const adminValidator = require('./validator/adminValidation')

 app.post('/adminLogin', adminValidator.adminValidator, adminController.adminLogin)
 app.get('/getTotalRegistrationNo', adminController.getTotalRegistrationNo)
 app.get('/allregistrationNo',adminController.allregistrationNo)