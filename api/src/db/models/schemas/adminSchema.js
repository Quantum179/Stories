import { Schema } from 'mongoose'
var options = { discriminatorKey: 'role', timestamps: true}; // TODO Quantum : delete role field in result queries

var AdminSchema = new Schema (
  {

  },
  options
)

export default AdminSchema
