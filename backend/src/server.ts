// Imports secrets from .env file and validates them
require('./common/utils/env')

import cors from 'cors'
import express, { Express } from 'express'
import helmet from 'helmet'

// Controllers (route handlers)
import { healthCheckRouter } from './api/healthCheck/healthCheck.routes'
import { sideBarRouter } from './api/sideBar/sideBar.routes'
import { templateController } from './api/templates/template.routes'
import { openAPIRouter } from './api-docs/openAPIRouter'
// Middleware
// Helpers
import errorHandler from './common/middleware/errorHandler'
import { PORT,

    MONGO_URL_LOCAL,
    MONGOHOST,
    MONGOPASSWORD,
    MONGOPORT,
    MONGOUSER,
    PRODUCTION_OR_DEVELOPMENT,
    Environment,
 } from './common/utils/env'

import mongoose from "mongoose"


let mongoDBConnection: string;

if(PRODUCTION_OR_DEVELOPMENT === Environment.PRODUCTION) {
    mongoDBConnection = `mongodb://${MONGOUSER!}:${MONGOPASSWORD!}@${MONGOHOST!}:${MONGOPORT!}`;
} else {
    mongoDBConnection = MONGO_URL_LOCAL!
}

// Connect to MongoDB
mongoose.connect(mongoDBConnection)
    .then(() => console.log('🚀 MongoDB Connected'))
    .catch((err) => {
        console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
        process.exit(1)
    })



// Create Express server
const app: Express = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

// Express configuration
app.set('port', PORT!)

// Primary app routes
app.use('/v1/health-check', healthCheckRouter)
app.use('/v1/sidebar', sideBarRouter)
app.use('/v1/template', templateController)

// Swagger UI
app.use(openAPIRouter)

// Error handlers
app.use(errorHandler())

export default app
