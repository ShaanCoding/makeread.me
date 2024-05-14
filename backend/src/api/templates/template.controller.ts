import fs from 'fs'
import { StatusCodes } from 'http-status-codes'

import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse'
import { DefaultBlockInput, IFunction, FullTemplateModel, MacroModel } from './template.model'

export default class TemplateController {
    public async getTemplateInitialisedComponentList(id: string): Promise<ServiceResponse<IFunction[] | null>> {
        try {
            if (!id || id === 'undefined') {
                return new ServiceResponse(ResponseStatus.Failed, 'ID was not provided in the query', null, StatusCodes.BAD_REQUEST)
            }

            const blockData = await FullTemplateModel.findOne({ folder: id })

            if (!blockData) {
                return new ServiceResponse(ResponseStatus.Failed, 'Template not found', null, StatusCodes.NOT_FOUND)
            }

            const indexData: string[] = blockData.startupBlocks

            const functions: IFunction[] = blockData.functions.map((block: IFunction) => {
                if (indexData.includes(block.function)) {
                    return block
                }
            })

            return new ServiceResponse<IFunction[]>(ResponseStatus.Success, 'Success', functions, StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    public async getTemplateMacros(body: DefaultBlockInput[]): Promise<ServiceResponse<string | null>> {
        try {
            if (!body || body.length === 0) {
                return new ServiceResponse(ResponseStatus.Failed, 'Body is empty', null, StatusCodes.BAD_REQUEST)
            }

            let macros = '';
            for (const block of body) {
                const {folder, function: name} = block;
                const macro = await MacroModel.findOne({
                    folder: folder,
                    name: name
                })
                if (macro) {
                    macros += macro.content;
                }
            }

            return new ServiceResponse<string>(ResponseStatus.Success, 'Success', macros, StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template macros', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    public async getTemplatePreview(id: string): Promise<ServiceResponse<string | null>> {
        try {
            if (!id || id == 'undefined') return new ServiceResponse(ResponseStatus.Success, 'Success', '', StatusCodes.OK)

            const filePath = `./public/${id}/preview.md`
            if (!fs.existsSync(filePath)) {
                return new ServiceResponse(ResponseStatus.Failed, 'Preview not found', null, StatusCodes.NOT_FOUND)
            }
            const previewData: string = fs.readFileSync(filePath, 'utf8')

            return new ServiceResponse<string>(ResponseStatus.Success, 'Success', previewData, StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template preview', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }
}

