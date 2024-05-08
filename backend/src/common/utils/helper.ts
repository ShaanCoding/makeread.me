import fs from 'fs'

import type { FullTemplate } from '@/api/templates/template.model'

export const readBlocksData = (): FullTemplate[] | null => {
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
