let dbhandle = require('../../database/dbhandler')

exports.insertUserData = insertUserData;
exports.getuserData = getuserData;

async function insertUserData(data){
    let query="INSERT INTO user_details (userName,userMobileNumber,userEmail,registrationType,noOfTickets, registrationId) VALUES(?,?,?,?,?,?)"
    let result = await dbhandle.mysqlQueryPromise({module : "insertData", api : "userRegistration"}, "inserUserDetails",
        query,data)
        if(result.affectedRows){
          return result
        }  
}

async function getuserData(data){
  let query = "SELECT * FROM user_details"
  let result = await dbhandle.mysqlQueryPromise({module : "getUserData", api : "userRegistration"}, "getUserData",
      query)
      if(result){
        return result
      }  
}

