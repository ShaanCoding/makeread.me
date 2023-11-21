import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi'
import express, { Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

import { createApiResponse } from '@/api-docs/openAPIResponseBuilders'
import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse'
import { handleServiceResponse } from '@/common/utils/httpHandlers'

import HealthCheckController from './healthCheck.controller'

export const healthCheckRegistry = new OpenAPIRegistry()

export const healthCheckRouter: Router = (() => {
    const router = express.Router()

    healthCheckRegistry.registerPath({
        method: 'get',
        path: '/health-check',
        tags: ['Health Check'],
        responses: createApiResponse(z.null(), 'Success'),
    })

    /*
     * GET /ping
     * @summary This is the summary or description of the endpoint
     */
    router.get('/', async (req: Request, res: Response) => {
        const controller = new HealthCheckController()
        const data = await controller.getHealth()

        const serviceResponse = new ServiceResponse(ResponseStatus.Success, data, null, StatusCodes.OK)
        handleServiceResponse(serviceResponse, res)
    })

    return router
})()
