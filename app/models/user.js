const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt-nodejs');

let userSchema = mongoose.Schema({
  local: {
    email: String,
    password: String
  },
  facebook: {
    id: String,
    name: String,
    email: String,
    token: String
  },
  twitter: {
    id: String,
    email: String,
    token: String,
    displayName: String
  },
  google: {
    id: String,
    name: String,
    email: String,
    token: String
  }
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.getSaltSync(8), null);
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);