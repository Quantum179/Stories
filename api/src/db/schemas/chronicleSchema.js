import mongoose from 'mongoose'
import ChapterSchema from './chapterSchema'

var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries

var ChronicleSchema = new Schema(
  {
    chronicleNumber: Number,
    theme: String,
    chapters: [{type: ChapterSchema, required: true}]
  }
)


export default ChronicleSchema
