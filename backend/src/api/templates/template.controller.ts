import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi'
import express, { Router } from 'express'
import { z } from 'zod'

import { createApiResponse } from '@/api-docs/openAPIResponseBuilders'
import { handleServiceResponse } from '@/common/utils/httpHandlers'

import { FullTemplateSchema, FunctionSchema, TemplateSchema, UserSchema } from './template.model'
import TemplateController from './templates.service'

export const templateRegistry = new OpenAPIRegistry()

templateRegistry.register('IUser', UserSchema)
templateRegistry.register('ITemplate', TemplateSchema)
templateRegistry.register('IFunction', FunctionSchema)
templateRegistry.register('IFullTemplate', FullTemplateSchema)

export const templateController: Router = (() => {
    const router = express.Router()

    templateRegistry.registerPath({
        method: 'get',
        path: '/template',
        tags: ['Template'],
        responses: createApiResponse(z.array(TemplateSchema), 'Success'),
    })

    /*
     * @route GET /api/templates
     * @desc Get all templates available
     */

    // TODO: Sort by featured as first

    router.get('/', async (req: Request, res: Response) => {
        const controller = new TemplateController()
        const serviceResponse = await controller.getAllTemplates()

        handleServiceResponse(serviceResponse, res)
    })

    /*
     * @route GET /api/template/:id
     * @desc Get a specific template by id
     */

    /*
     * @route GET /api/template/:id/index
     * @desc Get a specific template by id
     */

    // Instead we should return an array of what functions by default should be shown on the screen
    // For example, for a project template, we should return an array of what sections should be shown on the screen

    templateRegistry.registerPath({
        method: 'get',
        path: '/template/{id}/index',
        tags: ['Template'],
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
        ],
        responses: createApiResponse(z.array(FunctionSchema), 'Success'),
    })

    router.get('/:id/index', async (req: Request, res: Response) => {
        const controller = new TemplateController()
        const serviceResponse = await controller.getTemplateInitialisedComponentList(req.params.id)

        handleServiceResponse(serviceResponse, res)
    })

    templateRegistry.registerPath({
        method: 'get',
        path: '/template/{id}/sidebar',
        tags: ['Template'],
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
        ],
        responses: createApiResponse(z.array(FullTemplateSchema), 'Success'),
    })

    /*
     * @route GET /api/template/:id/sidebar
     * @desc Get a specific template by id
     */
    router.get('/:id/sidebar', async (req: Request, res: Response) => {
        const controller = new TemplateController()
        const serviceResponse = await controller.getTemplateSidebar(req.params.id)

        handleServiceResponse(serviceResponse, res)
    })

    templateRegistry.registerPath({
        method: 'get',
        path: '/template/{id}/macros',
        tags: ['Template'],
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
        ],
        responses: createApiResponse(z.string(), 'Success'),
    })

    /*
     * @route GET /api/template/:id/macros
     * @desc Get a specific templates macros
     */
    router.get('/:id/macros', async (req: Request, res: Response) => {
        const controller = new TemplateController()
        const serviceResponse = await controller.getTemplateMacros(req.params.id)

        handleServiceResponse(serviceResponse, res)
    })

    return router
})()
