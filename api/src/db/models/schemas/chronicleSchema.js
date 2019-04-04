import mongoose from 'mongoose'
import ChapterSchema from './chapterSchema'

var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var ChronicleSchema = new Schema(
  {
    number: {type: Number, required: true},
    theme: String,
    chapters: [{type: ChapterSchema, required: true}]
  }
)


export default ChronicleSchema
