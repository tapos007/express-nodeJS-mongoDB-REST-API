var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName:  String,
  lastName: String,
  email:   String,
  cars: [{
      type:Schema.Types.ObjectId,
      ref:'car'
  }],
  
});

const User = mongoose.model('user',userSchema);
module.exports = User;