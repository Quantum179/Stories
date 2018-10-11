import mongoose from 'mongoose'
var Schema = mongoose.Schema

var MagNumberSchema = new Schema(
  {
    title: String,
    numberMag: Number,
    description: String,
    preface: {type: Schema.Types.ObjectId, ref: 'Paragraph'},
    chapters: [{type: Schema.Types.ObjectId, ref: "Post"}],

    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    isTrending: Boolean, //refactor in interface with post and others schemas with this
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    ratings: [Number]
  }
)


//Statics
MagNumberSchema.statics.getOne = function(query = {}, fields = null, options = null) {
  let query = this.findOne(query, fields)
    .exec()
}

MagNumberSchema.statics.getById = function(id = {}, fields = null) {
  return this.findById(id, fields)
    .exec()
}

export default MagNumberSchema
