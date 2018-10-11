
function buildAnRunQuery(query, options) {
    let {fields, pop, sort, limit} = options

    if(fields != undefined) {
        query.select(fields)
    }
    if(populate != null) {
        query.populate(pop)
    }
    if(sort != null) {
        query.sort(sort)
    }
    if(limit != null) {
        query.limit(limit)
    }

    return query.exec()
}

export default function(schema, options) {
    schema.statics.getMany = function(attrs, options) {
        let query = this.find(attrs)
        return buildAnRunQuery(query, fields, pop)
    }

    schema.statics.getOneById = function(id, fields = null, pop = null) {
        let query = this.findById(id)
        return buildAnRunQuery(query, fields, pop)
    }
}