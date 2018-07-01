import mongoose from 'mongoose'
var Schema = mongoose.Schema
var options = { discriminatorKey: 'type', timestamps: true}; // TODO Quantum : delete role field in result queries


var SubscriberSchema = new Schema (
  {
    //TODO: business related fields

  },
  options
)

// Subscriber instance methods


// Subscriber static methods
SubscriberSchema.static.getByID = function(id) {
  return this.find({'_id': id})
    .exec()
}

export default SubscriberSchema
