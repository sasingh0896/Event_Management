const adminServices = require('../services/adminServices')
const logging  =require('../../logging/logging')
const response =require('../../response/response')
const _  = require('underscore')

exports.adminLogin = adminLogin
exports.getTotalRegistrationNo = getTotalRegistrationNo
exports.allregistrationNo = allregistrationNo

async function adminLogin(req, res){
    try{
        let userInfo = await adminServices.adminLogin(req.body.email)
        if(_.isEmpty(userInfo[0].adminEmail)){
            return response.authenticateEmailNotExists(res)
        }

         if((req.body.password) != userInfo[0].adminPassword){
             return response.wrongPasswordError(res);
         }
         return response.actionCompleteResponse(res,"login Success" )
   }
   catch(error){
       logging.logError(req.apiReference, {
           EVENT: "authenticateUser ERROR",
           ERROR: error
         });
       return response.sendError(res, error);

   }
}

async function getTotalRegistrationNo(req,res)
{
    let result = await adminServices.getTotalRegistrationType()
    if(result)
    console.log(result)
    res.send(JSON.stringify(result))
}

async function allregistrationNo(req,res)
{
    let result = await adminServices.allRegistrationNo()
    if(result)
    res.send(JSON.stringify(result))
}