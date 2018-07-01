import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var ChronicleSchema = new Schema(
  {
    title: String,
    chronicleNumber: Number,
    description: String,
    definitions: [{type: Schema.Types.ObjectId, ref: 'Definition'}],
    likes: Number,
    comments : [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    isTrending: Boolean
  }
)


export default ChronicleSchema
