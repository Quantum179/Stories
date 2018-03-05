import mongoose from 'mongoose'
var Schema = mongoose.Schema
import { isEmail } from 'validator'
var options = { discriminatorKey: 'role', timestamps: true}; // TODO Quantum : delete role field in result queries

export default new Schema (
  {
    name:  String,
    surname: String,
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
      required : isEmail
    },
    password: {
      type : String,
      required : true
      //TODO Quantum : hashed password validator
    },
    followings : [{type: Schema.Types.ObjectId, ref: 'User'}],
    followers : [{type: Schema.Types.ObjectId, ref: 'User'}]
  },
  options
)
