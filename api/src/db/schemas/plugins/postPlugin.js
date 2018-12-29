import mongoose from 'mongoose'
let Schema = mongoose.Schema

export default function(schema, options) {
    schema.add({
      title : {type: String, required: true},
      description: String,
      preface: [{type: Schema.Types.ObjectId, ref: 'Paragraph'}],
      isTrending: Boolean,
      ratings : [Number],
      likes : [{type: Schema.Types.ObjectId, ref: 'User'}],
      shares: [{type: Schema.Types.ObjectId, ref: 'Share'}],
      comments : [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    })
}
