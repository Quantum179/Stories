import mongoose from 'mongoose'
var Schema = mongoose.Schema

export default new Schema(
  {
    user: [{type: Schema.Types.ObjectId, ref: "User"}],
    post: [{type: Schema.Types.ObjectId, ref: "Post"}],
    currentParagraph: [{type: Schema.Types.ObjectId, ref: "Paragraph"}]
  }
)
