const User = require('../models/userModel');

exports.getUserDetails = async (req,res) => {
  try
  {
    return res.status(200).send({ success: true, message: `Hello ${req.params.user_id}` });
  }
  catch(e)
  {
    return res.status(500).send({ success: false, message: "An Unexpected Error Occurred" });
  }
}