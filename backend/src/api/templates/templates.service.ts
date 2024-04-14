import fs from 'fs'
import { StatusCodes } from 'http-status-codes'

import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse'

import { FullTemplate, IFunction, Template } from './template.model'

export default class TemplateController {
    public async getAllTemplates(): Promise<ServiceResponse<Template[] | null>> {
        try {
            const folders: string[] = fs.readdirSync('./public')

            const blocksData: FullTemplate[] = folders.map((folder: string) => {
                return JSON.parse(fs.readFileSync(`./public/${folder}/blocks.json`, 'utf8'))
            })

            return new ServiceResponse<Template[]>(ResponseStatus.Success, 'Success', blocksData, StatusCodes.OK)
        } catch (ex) {
            console.log(ex)
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get templates', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    public async getTemplateInitialisedComponentList(id: string): Promise<ServiceResponse<IFunction[] | null>> {
        try {
            if (!id || id == 'undefined') return new ServiceResponse(ResponseStatus.Success, 'Success', [], StatusCodes.OK)

            const blocksData: FullTemplate = JSON.parse(fs.readFileSync(`./public/${id}/blocks.json`, 'utf8'))
            const indexData: string[] = blocksData.startupBlocks

            const functions: IFunction[] = blocksData.functions.map((block: IFunction) => {
                if (indexData.includes(block.function)) {
                    return block
                }
            })

            return new ServiceResponse<IFunction[]>(ResponseStatus.Success, 'Success', functions, StatusCodes.OK)
        } catch (ex) {
            console.log(ex)
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    public async getTemplateSidebar(id: string): Promise<ServiceResponse<FullTemplate[] | null>> {
        try {
            if (id && id !== 'undefined') {
                const blocksData: FullTemplate = JSON.parse(fs.readFileSync(`./public/${id}/blocks.json`, 'utf8'))
                return new ServiceResponse<FullTemplate[]>(ResponseStatus.Success, 'Success', [blocksData], StatusCodes.OK)
            } else {
                const folders: string[] = fs.readdirSync('./public')

                const blocksData: FullTemplate[] = folders.map((folder: string) => {
                    return JSON.parse(fs.readFileSync(`./public/${folder}/blocks.json`, 'utf8'))
                })

                return new ServiceResponse<FullTemplate[]>(ResponseStatus.Success, 'Success', blocksData, StatusCodes.OK)
            }
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    public async getTemplateMacros(id: string): Promise<ServiceResponse<string | null>> {
        try {
            if (!id || id == 'undefined') return new ServiceResponse(ResponseStatus.Success, 'Success', '', StatusCodes.OK)

            const data = fs.readFileSync(`./public/${id}/macros.njk`, 'utf8')

            return new ServiceResponse<string>(ResponseStatus.Success, 'Success', data, StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template macros', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }
}
