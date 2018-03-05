import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'role', timestamps: true}; // TODO Quantum : delete role field in result queries

var AdminSchema = new Schema (
  {

  },
  options
)

export default AdminSchema
