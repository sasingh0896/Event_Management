let userController = require('./controller/userController')
let userValidator = require('./validator/userValidation')


app.post('/insert', userValidator.userValidator, userController.insertUserDetails)
app.get('/getData', userController.getUserData)
