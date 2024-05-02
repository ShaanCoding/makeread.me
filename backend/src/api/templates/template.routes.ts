import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi'
import express, { Request, Response, Router } from 'express'
import { z } from 'zod'

import { createApiResponse } from '@/api-docs/openAPIResponseBuilders'
import { handleServiceResponse } from '@/common/utils/httpHandlers'

import {
    FullTemplateSchema,
    FunctionSchema,
    ObjectSchema,
    PageTypeSchema,
    SideBarOptionsSchema,
    TemplateSchema,
    URLTypeSchema,
    UserSchema,
    VariableCheckBoxSchema,
    VariableInputSchema,
    VariableListSchema,
    VariableObjectSchema,
    VariableRadioSchema,
    VariableSchema,
    VariableSelectSchema,
    VariableTextAreaSchema,
    VariableTypeSchema,
} from './template.model'
import TemplateController from './templates.controller'

export const templateRegistry = new OpenAPIRegistry()

templateRegistry.register('IUser', UserSchema)
templateRegistry.register('ITemplate', TemplateSchema)
templateRegistry.register('IFunction', FunctionSchema)
templateRegistry.register('IFullTemplate', FullTemplateSchema)
templateRegistry.register('IVariable', VariableSchema)
templateRegistry.register('IObject', ObjectSchema)

templateRegistry.register('IVariableType', VariableTypeSchema)
templateRegistry.register('IVariableInput', VariableInputSchema)
templateRegistry.register('IVariableTextArea', VariableTextAreaSchema)
templateRegistry.register('IVariableCheckBox', VariableCheckBoxSchema)
templateRegistry.register('IVariableList', VariableListSchema)
templateRegistry.register('IVariableObject', VariableObjectSchema)
templateRegistry.register('IVariableSelect', VariableSelectSchema)
templateRegistry.register('IVariableRadio', VariableRadioSchema)

templateRegistry.register('IURLType', URLTypeSchema)
templateRegistry.register('ISideBarOptions', SideBarOptionsSchema)
templateRegistry.register('IPageType', PageTypeSchema)

export const templateController: Router = (() => {
    const router = express.Router()

    templateRegistry.registerPath({
        method: 'get',
        path: '/v1/template/template/{id}/defaultBlocks',
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

    router.get('/template/:id/defaultBlocks', async (req: Request, res: Response) => {
        const controller = new TemplateController()
        const serviceResponse = await controller.getTemplateInitialisedComponentList(req.params.id)

        handleServiceResponse(serviceResponse, res)
    })

    templateRegistry.registerPath({
        method: 'post',
        path: '/v1/template/template/{id}/macros',
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

    router.post('/template/:id/macros', async (req: Request, res: Response) => {
        const controller = new TemplateController()
        const serviceResponse = await controller.getTemplateMacros(req.params.id)

        handleServiceResponse(serviceResponse, res)
    })

    return router
})()
