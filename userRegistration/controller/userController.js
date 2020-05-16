const multer = require('multer')
const logging = require('../../logging/logging')
const response = require('../../response/response')
const random   = require('randomstring')
const userServices = require('../services/userServices')

exports.getUserData = getUserData;

 let insertUserDetails= async(req,res)=>{
    try{
        let data = []
     data.push(req.body.userName)
     data.push(req.body.mobile)
     data.push(req.body.email)
     data.push(req.body.registrationType)
     data.push(req.body.tickets)
     data.push(registrationNo())


     let result = await userServices.insertUserData(data);
     if(result)
     return response.actionCompleteResponse(res,"YOUR REGISTRAION NUMBER IS:",registrationNo())
    }
    catch(error){
        logging.logError(req.apiReference, {
            EVENT: "authenticateUser ERROR",
            ERROR: error
          });
        return response.sendError(res, error);
    }
 }

async function getUserData(req,res){
  try{
    let result = await userServices.getuserData();
    res.send(JSON.stringify(result))

  }
  catch(error)
  {
    res.send(error)
  }
 
 
}


function registrationNo(){
  let id = "R"+random.generate({
      length:10,
  })
  return id;
}


module.exports.insertUserDetails = insertUserDetails;
