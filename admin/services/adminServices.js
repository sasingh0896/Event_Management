import dbhandle from '../../database/dbhandler';

exports.adminLogin = adminLogin;
exports.getTotalRegistrationType = getTotalRegistrationType;
exports.allRegistrationNo = allRegistrationNo;

 function adminLogin(opts){
    return new Promise(async (resolve, reject) => {
        {
            let query = " SELECT * FROM admin WHERE adminEmail = ? ";
            await dbhandle.mysqlQueryPromise(apiReference, "loginCredintials", query, opts)
                .then((result) => {
                        resolve(result)   
                    },
                    (error) => reject(error));
        }
    });
}
 function getTotalRegistrationType(){
    return new Promise(async (resolve, reject) => {
        {
            let query = "SELECT registrationType, SUM(noOfTickets) FROM `user_details` GROUP By registrationType ";
            await dbhandle.mysqlQueryPromise(apiReference, "loginCredintials", query, opts)
                .then((result) => {
                        resolve(result)
                        
                    },
                    (error) => reject(error));
        }
    });
}

function allRegistrationNo(){
    return new Promise(async (resolve, reject) => {
        {
            let query = "SELECT userName, registrationId, creation_datetime FROM `user_details` GROUP BY creation_datetime ";
            await dbhandle.mysqlQueryPromise(apiReference, "loginCredintials", query, opts)
                .then((result) => {
                        resolve(result)
                        
                    },
                    (error) => reject(error));
        }
    });
}