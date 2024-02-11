const UserData = require('../models/userData');

function userUtils() {  
}


userUtils.addUser=async(userData)=>{
  try {
    const newUserData = new UserData(userData);
    await newUserData.save();
  } catch (error) {
    throw error;
  }
}



module.exports = userUtils;
