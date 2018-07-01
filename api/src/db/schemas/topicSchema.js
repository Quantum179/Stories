import mongoose from 'mongoose'
var Schema = mongoose.Schema

export default new Schema(
  {
    name: String,
    description: String,
    //discussions: [{type: Schema.Types.ObjectId, ref: "Discussion"}]
    //articles: [{type: Schema.Types.ObjectId, ref: "Article"}]

    
  }
)
