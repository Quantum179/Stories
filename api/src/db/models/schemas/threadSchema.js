import mongoose from 'mongoose'
import CommentSchema from './commentSchema';
var Schema = mongoose.Schema

let ThreadSchema = new Schema(
  {
    title: String,
    introduction: String,
    comments: [CommentSchema],
    shares: Number //Do analysis for share schema
  }
)

export default ThreadSchema