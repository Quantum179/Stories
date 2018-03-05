import mongoose from 'mongoose'
var Schema = mongoose.Schema

export default new Schema(
  {
    title: String,
    description: String //TODO Quantum : limit description size
  }
)
