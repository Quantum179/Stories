import mongoose from 'mongoose'
var Schema = mongoose.Schema
import { isEmail } from 'validator'
var options = { discriminatorKey: 'role', timestamps: true}; // TODO Quantum : delete role field in result queries

var UserSchema = new Schema (
  {
    name: {
      type: {
        first: String,
        last: String
      },
      required: true
    },
    // TODO Quantum : use Mongoose virtual to create fullName field
    username: {
      type: String,
      required: true,
      unique: true
    },
    roles: [String],
    // Mongoose createAt
    // Mongoose updateAt
    email: {
      type : String,
      required : isEmail,
      unique: true
    },
    password: {type : String, required : true},
      //TODO Quantum : hashed password validator
    followings : [{type: Schema.Types.ObjectId, ref: 'User'}],
    followers : [{type: Schema.Types.ObjectId, ref: 'User'}],
    status : String
    //TODO Quantum : valider le status de connexion d'un user : en ligne, occupé, en jeu, chatbot, invisible
  },
  options
)

// Virtual fields
UserSchema.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last;
});

//Methods model
UserSchema.methods.register = function(cb) {
  //TODO : create hash password
  return this.save()
  .exec(cb)
}


//Statics model
UserSchema.statics.findOne = function(query = {}, fields, cb) {
  return this.findOne(query, fields)
  .exec(cb)
}
UserSchema.statics.findMany = function(query = {}, fields, cb) {
  return this.find(query, fields)
  .exec(cb)
}
UserSchema.statics.findById = function(id, fields, cb) {
  return this.findById(id, fields)
  .exec(cb)
}
UserSchema.statics.addUser = function(user) {
  return this.create(user)
  .exec(cb)
}
UserSchema.statics.addUsers = function(users) {
  return this.create(users)
  .exec(cb)
}

// --- EXPORT MODULE ---
export default UserSchema
