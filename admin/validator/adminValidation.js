const Joi = require('joi')

const validate= require('../../validator/validation')

exports.adminValidator = adminValidator ;


function adminValidator(req, res , next){
    req.apiRefrence={ 
        module:"adminLogin",
       api:"adminLogin"
    }
    var schema = Joi.object().keys({
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        password : Joi.string().required(),
    })

    let validateFeilds = validate.validateFeilds(req.apiRefrence,req.body, res, schema)
     if(validateFeilds)
     {
         next();
     }
}