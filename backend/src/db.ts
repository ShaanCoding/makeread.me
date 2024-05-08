import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { Environment, MONGOHOST, MONGOPASSWORD, MONGOPORT, MONGOUSER, PRODUCTION_OR_DEVELOPMENT } from './common/utils/env'
import { FullTemplateModel } from './api/templates/template.model'
import { readBlocksData } from './common/utils/helper'

let mongoDBConnection: string = ''

const connectToDevDB = async () => {
    const mongod = new MongoMemoryServer()
    await mongod.start()
    mongoDBConnection = mongod.getUri()
}

const connectToProdDB = () => {
    throw Error('Prod DB not implemented yet')
    mongoDBConnection = `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}:${MONGOPORT}`
}

const initTemplates = async () => {
    try {
        const templateData = readBlocksData()
        if (!templateData) {
            throw Error('Failed to read template data')
        }

        for (const template of templateData) {
            await FullTemplateModel.create(template)
        }
    } catch (error) {
        console.error('Error adding template:', error)
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
