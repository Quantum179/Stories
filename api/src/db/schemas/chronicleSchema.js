import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var ChronicleSchema = new Schema(
  {
    chronicleNumber: Number,
    theme: String
  }
)


export default ChronicleSchema
