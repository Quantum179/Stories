export default function(schema, options) {
    schema.add({
        isTrending: Boolean,
        ratings : [Number],
        likes : [{type: Schema.Types.ObjectId, ref: 'User'}],
        shares: [{type: Schema.Types.ObjectId, ref: 'Share'}], //TODO : create shareSchema
        comments : [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    })
}