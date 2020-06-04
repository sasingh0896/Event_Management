const Joi = require('joi')

const validate= require('../../validator/validation')

exports.userValidator = userValidator ;


function userValidator(req, res , next){
    req.apiRefrence={ 
        module:"Registration",
       api:"re"
    }
    var schema = Joi.object().keys({
        userName : Joi.string().required(),
        mobile : Joi.string().required(),
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        registrationType : Joi.string().required(),
        tickets : Joi.number().required()
    })

    let validateFeilds = validate.validateFeilds(req.apiRefrence,req.body, res, schema)
     if(validateFeilds)
     {
         next();
     }
}