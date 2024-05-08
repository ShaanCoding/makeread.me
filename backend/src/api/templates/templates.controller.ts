import fs from 'fs'
import { StatusCodes } from 'http-status-codes'

import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse'
import { DefaultBlockInput, IFunction, FullTemplateModel } from './template.model'

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
            // From this, we want to find every UNIQUE macro per folder and then append them to an array
            // Then we want to go through those folders only and get the macros in the fewest amount of reads
            const bodyMapped: Map<string, Set<string>> = new Map<string, Set<string>>()

            // TODO: Why is object undefined?
            body.forEach((block: DefaultBlockInput) => {
                if (bodyMapped.has(block.folder)) {
                    bodyMapped.get(block.folder).add(block.function)
                } else {
                    bodyMapped.set(block.folder, new Set<string>().add(block.function))
                }
            })

            const macros: string[] = []

            bodyMapped.forEach((value: Set<string>, key: string) => {
                const data: Record<string, string> = JSON.parse(fs.readFileSync(`./public/${key}/macros.json`, 'utf8')) // TODO: use DB instead of FS

                value.forEach((macro: string) => {
                    macros.push(data[macro])
                })
            })

            return new ServiceResponse<string>(ResponseStatus.Success, 'Success', macros.join(''), StatusCodes.OK)
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
