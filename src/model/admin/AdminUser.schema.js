const mongoose = require('mongoose');

const AdminUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
  
    unique: true
  },
  email: { 
    type: String,
     required: true,
     unique: true

  },
  password: {
    type: String,
   
  },
  contactNumber: {
    type: String,
    
  },
  userLevel: {
    type: String,
    enum: ['Admin', 'Manager', 'Lead Manager'],
   
  }
});

const User = mongoose.model('AdminUser', AdminUserSchema);

module.exports = User;
