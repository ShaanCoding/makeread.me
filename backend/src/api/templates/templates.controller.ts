import fs from 'fs'
import { StatusCodes } from 'http-status-codes'

import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse'

import { FullTemplate, IFunction, Template } from './template.model'

export default class TemplateController {
    public async getAllTemplates(search: string, filter: string[], pageType: string): Promise<ServiceResponse<Template[] | null>> {
        try {
            const folders: string[] = fs.readdirSync('./public')

            let blocksData: FullTemplate[] = folders.map((folder: string) => {
                return JSON.parse(fs.readFileSync(`./public/${folder}/blocks.json`, 'utf8'))
            })

            // Sort by featured first
            blocksData.sort((a: FullTemplate, b: FullTemplate) => {
                return a.featured === b.featured ? 0 : a.featured ? -1 : 1
            })

            // search goes through templates and returns ones that match title or description
            if (search.length) {
                blocksData = blocksData.filter((block: FullTemplate) => {
                    return block.title.toLowerCase().includes(search.toLowerCase()) || block.description.toLowerCase().includes(search.toLowerCase())
                })
            }

            // filter by template tags (array)
            // Returns blocks that have tags that match the filter
            if (filter.length) {
                blocksData = blocksData.filter((block: FullTemplate) => {
                    return block.tags.some((tag) => {
                        return filter.includes(tag.url)
                    })
                })
            }

            // filter by pageType
            if (pageType.length && pageType !== 'None') {
                blocksData = blocksData.filter((block: FullTemplate) => {
                    return pageType.includes(block.pageType)
                })
            }

            return new ServiceResponse<Template[]>(ResponseStatus.Success, 'Success', blocksData, StatusCodes.OK)
        } catch (ex) {
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
