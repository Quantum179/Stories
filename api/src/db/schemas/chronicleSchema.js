import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var ChronicleSchema = new Schema(
  {
    numberChronicle: Number,
    relatedHeroes: [{type: Schema.Types.ObjectId, ref: 'Definition'}]
  }
)


export default ChronicleSchema
