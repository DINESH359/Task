const FormData = require('../models/formData');

function taskUtils() {  
}

taskUtils.getAllTasks=async() =>{
  try {
    const tasks = await FormData.find({});
    return tasks;
  } catch (error) {
    throw error;
  }
}

taskUtils.submitFormData=async(formData)=>{
  try {
    const newFormData = new FormData(formData);
    await newFormData.save();
  } catch (error) {
    throw error;
  }
}

// module.exports = {
//   getAllTasks,
//   submitFormData,
// };

module.exports = taskUtils;
