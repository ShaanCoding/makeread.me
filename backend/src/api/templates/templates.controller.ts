import fs from 'fs'
import { StatusCodes } from 'http-status-codes'

import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse'

import { FullTemplate, IFunction, Template } from './template.model'

export default class TemplateController {
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
