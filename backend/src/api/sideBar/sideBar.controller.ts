import fs from 'fs'
import { StatusCodes } from 'http-status-codes'
import { SideBarOptions, FullTemplate, IFunction, Template } from '../templates/template.model'
import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse'

export default class SideBarController {
    public async getAllTemplates(search: string, filter: string[], pageType: string): Promise<ServiceResponse<Template[] | null>> {
        try {
            let blocksData = this.readBlocksData()

            if (blocksData === null) {
                return this.handleNullBlocksData()
            }

            blocksData = this.sortBlocksByFeatured(blocksData)

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

    public async getAllSidebar(): Promise<ServiceResponse<SideBarOptions[] | null>> {
        try {
            const sidebarOptionsSet: Set<string> = new Set<string>()

            const blocksData = this.readBlocksData()

            if (blocksData === null) {
                return this.handleNullBlocksData()
            }

            blocksData.map((block: FullTemplate) => {
                block.tags.forEach((tag) => {
                    sidebarOptionsSet.add(JSON.stringify({ label: tag.name, value: tag.url }))
                })
            })

            const sidebarOptions: SideBarOptions[] = Array.from(sidebarOptionsSet).map((option: string) => {
                return JSON.parse(option)
            })

            return new ServiceResponse<SideBarOptions[]>(ResponseStatus.Success, 'Success', sidebarOptions, StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get sidebar options', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    private findTemplateWithFunction(templates: FullTemplate[], search: string): FullTemplate[] {
        // Filter templates first
        const filteredTemplates = templates.filter((template: FullTemplate) => {
            return template.functions.some((func: IFunction) => {
                return func.name.toLowerCase().includes(search.toLowerCase()) || func.description.toLowerCase().includes(search.toLowerCase())
            })
        })

        // Then map through each template and within each, filter the functions array
        const transformedTemplates = filteredTemplates.map((template: FullTemplate) => {
            const filteredFunctions = template.functions.filter((func) => {
                return func.name.toLowerCase().includes(search.toLowerCase()) || func.description.toLowerCase().includes(search.toLowerCase())
            })
            return { ...template, functions: filteredFunctions }
        })

        return transformedTemplates
    }

    public async getTemplateSidebar(id: string, search: string, filter: string[]): Promise<ServiceResponse<FullTemplate[] | null>> {
        try {
            if (id && id !== 'undefined') {
                const filePath = `./public/${id}/blocks.json`
                if (!fs.existsSync(filePath)) {
                    return new ServiceResponse(ResponseStatus.Failed, 'Template not found', null, StatusCodes.NOT_FOUND)
                }

                const blocksData: FullTemplate = JSON.parse(fs.readFileSync(filePath, 'utf8'))
                return new ServiceResponse<FullTemplate[]>(ResponseStatus.Success, 'Success', [blocksData], StatusCodes.OK)
            } else {
                let blocksData = this.readBlocksData()

                if (blocksData === null) {
                    return this.handleNullBlocksData()
                }

                blocksData = this.sortBlocksByFeatured(blocksData)

                // search goes through all templates and filters by function.name and function.description
                // Only show that block if it has a function that matches the search and not the other related ones

                if (search.length) {
                    blocksData = this.findTemplateWithFunction(blocksData, search)
                }

                // filter by template (folder name)
                if (filter.length) {
                    blocksData = blocksData.filter((block: FullTemplate) => {
                        return filter.includes(block.folder)
                    })
                }

                return new ServiceResponse<FullTemplate[]>(ResponseStatus.Success, 'Success', blocksData, StatusCodes.OK)
            }
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    public async getAllTemplateFolders(): Promise<ServiceResponse<SideBarOptions[] | null>> {
        try {
            const blocksData = this.readBlocksData()

            // Needs to read the blocks.json file and get the folder name and the title
            // This is to show the folder name and the title of the template
            if (blocksData === null) {
                return this.handleNullBlocksData()
            }

            const sidebarOptions: SideBarOptions[] = blocksData.map((block: FullTemplate) => {
                return {
                    label: block.title,
                    value: block.folder,
                }
            })

            return new ServiceResponse<SideBarOptions[]>(ResponseStatus.Success, 'Success', sidebarOptions, StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template folders', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    private readBlocksData(): FullTemplate[] | null {
        try {
            const folders: string[] = fs.readdirSync('./public')
            const blocksData = folders.map((folder: string) => {
                const data = fs.readFileSync(`./public/${folder}/blocks.json`, 'utf8')
                return JSON.parse(data)
            })
            return blocksData
        } catch (error) {
            return null
        }
    }

    private handleNullBlocksData(): ServiceResponse<null> {
        return new ServiceResponse(ResponseStatus.Failed, 'Failed to read templates', null, StatusCodes.INTERNAL_SERVER_ERROR)
    }

    private sortBlocksByFeatured(blocksData: FullTemplate[]): FullTemplate[] {
        return blocksData.sort((a: FullTemplate, b: FullTemplate) => {
            return a.featured === b.featured ? 0 : a.featured ? -1 : 1
        })
    }
}
