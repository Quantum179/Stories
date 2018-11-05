import mongoose from 'mongoose'
var Schema = mongoose.Schema
import { isEmail } from 'validator'
import bcrypt from 'bcrypt'
import { baseUrl } from '../../constants'
import queryPlugin from './plugins/queryPlugin'

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
      type: {first: String, last: String},
      required: true
    },
    username: {type: String, required: true, unique: true},
    roles: [String],
    email: {type : String, required : true, unique: true},
    password: {type : String, required : true},
      //TODO Quantum : hashed password validator
    followings : [{type: Schema.Types.ObjectId, ref: 'User'}],
    followers : [{type: Schema.Types.ObjectId, ref: 'User'}],

    status : String, //en ligne, occupé, en jeu, chatbot, invisible

    //TODO: add profile schema with notifications, readings, etcs
    readings: [{type: Schema.Types.ObjectId, ref: 'Reading'}],
    notifications: [{type: Schema.Types.ObjectId, ref: 'Notification'}],
    discussions: [{type: Schema.Types.ObjectId, ref: 'Discussion'}]
  },
  options
)

// Virtual fields
 UserSchema.virtual('url').get(function(){
  return `${baseUrl}/users/${this._id}` //TODO: add global constant
})  

//Hooks model
UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, saltRounds, function(err, hash) {
    if(!err) {
      this.password = hash    
    }
  })
  next()
})

//Plugins
UserSchema.plugin(queryPlugin)

// --- EXPORT MODULE ---
export default UserSchema
