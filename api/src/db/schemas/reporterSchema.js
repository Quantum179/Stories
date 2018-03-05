import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'role', timestamps: true}; // TODO Quantum : delete role field in result queries

export default new Schema (
  {

  },
  options
)
