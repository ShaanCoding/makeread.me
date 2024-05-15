import mongoose, { mongo } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { Environment, PRODUCTION_OR_DEVELOPMENT, MONGO_PRIVATE_URL } from './common/utils/env'
import { FullTemplateModel, MacroModel } from './api/templates/template.model'
import { createMacroObjects, createTemplateObjects } from './common/utils/helper'

let mongoDBConnection: string = ''
let mongoConnectionOptions: mongoose.ConnectOptions = {}

const connectToDevDB = async () => {
    const mongod = new MongoMemoryServer()
    await mongod.start()
    mongoDBConnection = mongod.getUri()
}

const connectToProdDB = () => {
    mongoDBConnection = MONGO_PRIVATE_URL
    mongoConnectionOptions = {
        autoIndex: false,
        dbName: 'makereadme',
    }
}

const initTemplates = async () => {
    try {
        const templates = createTemplateObjects()
        if (!templates) {
            throw Error('Failed to read template data')
        }
        // TODO: This will cause horizontal scaling issues. We should use a unique index on the folder field instead.
        await FullTemplateModel.collection.drop()
        await FullTemplateModel.create(templates)
    } catch (error) {
        console.error('Error adding templates:', error)
    }

    try {
        const macros = createMacroObjects();
        if (!macros) {
            throw Error('Failed to read macros data')
        }
        // TODO: This will cause horizontal scaling issues. We should use a unique index on the folder field instead.
        await MacroModel.collection.drop()
        await MacroModel.create(macros)
    } catch (error) {
        console.error('Error adding macros:', error)
    }
}

export const initMongoDB = async () => {
    try {
        if (PRODUCTION_OR_DEVELOPMENT === Environment.PRODUCTION) {
            connectToProdDB()
        } else {
            await connectToDevDB()
        }

        await mongoose.connect(mongoDBConnection, mongoConnectionOptions)
        await initTemplates()
        console.log('🚀 MongoDB Connected')
    } catch (error) {
        console.error('MongoDB connection error. Please make sure MongoDB is running.', error)
        process.exit(1)
    }
}
