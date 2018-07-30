// Constants
let baseUrl = 'http://127.0.0.1:5000/'
let saltRounds = 10
let secret = 'secretstoriesprovisoire'
let defaultMongooseFields = ['__v', '_id', 'id', 'updatedAt', 'createdAt']

export {
    baseUrl,
    saltRounds,
    secret,
    defaultMongooseFields
}