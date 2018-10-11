import mongoose from 'mongoose'
var Schema = mongoose.Schema
import { isEmail } from 'validator'
import bcrypt from 'bcrypt'
import { baseUrl } from '../../constants'


var options = { 
  discriminatorKey: 'type', 
  timestamps: true,
   toObject: {
    virtuals: true
  }
  ,toJSON: {
    virtuals: true
  }
  ,id:false 
}; // TODO Quantum : delete role field in result queries

var UserSchema = new Schema (
  {
    name: {
      type: {
        first: String,
        last: String
      },
      required: true
    },
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
      required : true,
      unique: true
    },
    password: {type : String, required : true},
      //TODO Quantum : hashed password validator
    followings : [{type: Schema.Types.ObjectId, ref: 'User'}],
    followers : [{type: Schema.Types.ObjectId, ref: 'User'}],
    status : String, //en ligne, occupé, en jeu, chatbot, invisible


    readings: [{type: Schema.Types.ObjectId, ref: 'Reading'}]

    //TODO: Analysis for notifications
  },
  options
)

// Virtual fields
 UserSchema.virtual('url').get(function(){
  return baseUrl + 'users/' + this._id //TODO: add global constant
})  

//Hooks model
UserSchema.pre('save', function(next) {
  //TODO : try to refactor this in UserSchema pre save hook function
  bcrypt.hash(this.password, saltRounds, function(err, hash) {
    if(!err) {
      this.password = hash    
    }
      
  })
  //TODO : check if anything else is missing
  console.log("test pre")
  next()
})

//Methods model

//Statics model
UserSchema.statics.getMany = function(query = {}, fields = null) {
  return this.find(query, fields)
    .exec()
}
UserSchema.statics.getOne = function(query = {}, fields = null) {
  return this.findOne(query, fields)
    .exec()
}
UserSchema.statics.getById = function(id, fields = null) {
  return this.findById({id: id}, fields)
    .exec()
}

UserSchema.statics.add = function(user) {
  return this.create(user)
} 

UserSchema.statics.update = function(id, user) {
  return this.updateOne({_id: id}, {$set: user})
    .exec()
}

UserSchema.statics.updateMany = function(id, user) {

}

UserSchema.statics.delete = function(id) {
  return this.findByIdAndDelete(id)
    .exec()
}

// --- EXPORT MODULE ---
export default UserSchema
