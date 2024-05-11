import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { Environment, PRODUCTION_OR_DEVELOPMENT, MONGO_PRIVATE_URL } from './common/utils/env'
import { FullTemplateModel, MacroModel } from './api/templates/template.model'
import { createMacroObjects, createTemplateObjects } from './common/utils/helper'

let mongoDBConnection: string = ''

const connectToDevDB = async () => {
    const mongod = new MongoMemoryServer()
    await mongod.start()
    mongoDBConnection = mongod.getUri()
}

const connectToProdDB = () => {
    mongoDBConnection = MONGO_PRIVATE_URL
}

const initTemplates = async () => {
    try {
        const templates = createTemplateObjects()
        if (!templates) {
            throw Error('Failed to read template data')
        }
         await FullTemplateModel.create(templates)
    } catch (error) {
        console.error('Error adding templates:', error)
    }

    try {
        const macros = createMacroObjects();
        if (!macros) {
            throw Error('Failed to read macros data')
        }
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

        await mongoose.connect(mongoDBConnection)
        await initTemplates()
        console.log('🚀 MongoDB Connected')
    } catch (error) {
        console.error('MongoDB connection error. Please make sure MongoDB is running.', error)
        process.exit(1)
    }
}
