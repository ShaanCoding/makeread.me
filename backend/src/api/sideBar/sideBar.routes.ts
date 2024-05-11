import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi'
import express, { Request, Response, Router } from 'express'
import { z } from 'zod'

import { createApiResponse } from '@/api-docs/openAPIResponseBuilders'
import { handleServiceResponse } from '@/common/utils/httpHandlers'
import SideBarController from './sideBar.controller'
import { SideBarOptionsSchema, FullTemplateSchema, TemplateSchema } from '../templates/template.model'

export const sideBarRegistry = new OpenAPIRegistry()

export const sideBarRouter: Router = (() => {
    const router = express.Router()

    sideBarRegistry.registerPath({
        method: 'get',
        path: '/v1/sidebar/all',
        tags: ['Sidebar'],
        parameters: [
            {
                name: 'search',
                in: 'query',
                required: false,
                schema: {
                    type: 'string',
                },
            },
            {
                name: 'filter',
                in: 'query',
                required: false,
                schema: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                },
            },
            {
                name: 'pageType',
                in: 'query',
                required: false,
                schema: {
                    type: 'string',
                },
            },
        ],
        responses: createApiResponse(z.array(TemplateSchema), 'Success'),
    })

    /*
     * @route GET /api/templates
     * @desc Get all templates available
     */

    // TODO: Sort by featured as first

    router.get('/all', async (req: Request, res: Response) => {
        const search: string = req.query.search?.toString() || ''
        const filter: string[] = req.query.filter?.toString().split(',') || []
        const pageType: string = req.query.pageType?.toString() || ''

        const controller = new SideBarController()
        const serviceResponse = await controller.getAllTemplates(search, filter, pageType)

        handleServiceResponse(serviceResponse, res)
    })

    // we want to get all categories for all templates & page types
    sideBarRegistry.registerPath({
        method: 'get',
        path: '/v1/sidebar/all/options',
        tags: ['Sidebar'],
        responses: createApiResponse(z.array(SideBarOptionsSchema), 'Success'),
    })

    /*
     * @route GET /api/sidebar
     * @desc Get all categories for all templates & page types
     */
    router.get('/all/options', async (req: Request, res: Response) => {
        const controller = new SideBarController()
        const serviceResponse = await controller.getAllSidebar()

        handleServiceResponse(serviceResponse, res)
    })

    // search for name / description
    // filter by template
    sideBarRegistry.registerPath({
        method: 'get',
        path: '/v1/sidebar/template/',
        tags: ['Sidebar'],
        parameters: [
            {
                name: 'search',
                in: 'query',
                required: false,
                schema: {
                    type: 'string',
                },
            },
            {
                name: 'filter',
                in: 'query',
                required: false,
                schema: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                },
            },
        ],
        responses: createApiResponse(z.array(FullTemplateSchema), 'Success'),
    })

    /*
     * @route GET /api/template/:id/sidebar
     * @desc Get a specific template by id
     */
    router.get('/template', async (req: Request, res: Response) => {
        const controller = new SideBarController()
        const paramId: string = req.params.id || 'undefined'
        const querySearch: string = req.query.search?.toString() || ''
        const queryFilter: string[] = req.query.filter?.toString().split(',') || []

        const serviceResponse = await controller.getTemplateSidebar(paramId, querySearch, queryFilter)

        handleServiceResponse(serviceResponse, res)
    })

    // getAllTemplateFolders

    sideBarRegistry.registerPath({
        method: 'get',
        path: '/v1/sidebar/template/options',
        tags: ['Sidebar'],
        responses: createApiResponse(z.array(SideBarOptionsSchema), 'Success'),
    })

    /*
     * @route GET /api/template/:id/sidebar/options
     * @desc Get a specific template by id
     */
    router.get('/template/options', async (req: Request, res: Response) => {
        const controller = new SideBarController()
        const serviceResponse = await controller.getAllTemplateFolders()

        handleServiceResponse(serviceResponse, res)
    })

    return router
})()
