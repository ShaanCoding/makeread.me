import dotenv from 'dotenv'
import fs from 'fs'

if (process.env.NODE_ENV === 'prod') {
    console.log('Production environment detected, skipping dotenv configuration')
} else if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' })
} else {
    console.log('No .env file. Create an .env file and put environment variables in it')
    process.exit(1)
}

/*
List of all environment variables used in the backend.
FRONTEND_URL
BASE_URL
*/

const listOfErrorMessages: string[] = []

export const NODE_ENV = process.env.NODE_ENV

if (!NODE_ENV) {
    listOfErrorMessages.push('No NODE_ENV set')
}

export enum Environment {
    PRODUCTION = 'prod',
    DEVELOPMENT = 'dev',
}

export const PRODUCTION_OR_DEVELOPMENT: Environment = NODE_ENV === 'prod' ? Environment.PRODUCTION : Environment.DEVELOPMENT

export const PORT = process.env.PORT

if (!PORT) {
    listOfErrorMessages.push('No PORT set')
}

export const FRONTEND_URL = process.env.FRONTEND_URL
export const BASE_URL = process.env.BASE_URL

if (!FRONTEND_URL) {
    listOfErrorMessages.push('No FRONTEND_URL set')
}

if (!BASE_URL) {
    listOfErrorMessages.push('No BASE_URL set')
}

if (listOfErrorMessages.length > 0) {
    console.log('Missing environment variables:')
    listOfErrorMessages.forEach((errorMessage: string, index: number) => {
        console.log(`[${index + 1}] ${errorMessage}`)
    })
    process.exit(1)
}
