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
import { PORT } from './common/utils/env'

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
