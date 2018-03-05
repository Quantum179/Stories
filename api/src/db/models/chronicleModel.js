import mongoose from 'mongoose'
import chronicleSchema from '../schemas/chronicleSchema'
import PostModel from './postModel'

var ChronicleModel = PostModel.discriminator('Chronicle', chronicleSchema)

// TODO Quantum : chronicle methods for queries

export default ChronicleModel
