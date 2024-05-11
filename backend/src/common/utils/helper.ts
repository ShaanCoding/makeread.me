import fs from 'fs'
import path from 'path';

import type { FullTemplate, Macro } from '@/api/templates/template.model'

export const createTemplateObjects = (): FullTemplate[] | null => {
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

const readNjkFiles = (parentFolder: string): Macro[] | null => {
    try {
        let macros: Macro[] = [];

        let macroData = fs.readFileSync(`./public/${parentFolder}/macros.json`, 'utf8');
        macroData = JSON.parse(macroData);

        Object.keys(macroData).forEach(key => {
            const macro: Macro = { folder: parentFolder, name: key, content: macroData[key] } as Macro;
            macros.push(macro);
        })

        return macros;
    } catch (error) {
        return null
    }
}

export const createMacroObjects = (): Macro[] | null => {
    const macros: Macro[] = [];
    const rootDir = './public';
    try {
        const folders = fs.readdirSync(rootDir);
        folders.forEach(folder => {
            const folderPath = path.join(rootDir, folder);
            const folderStats = fs.statSync(folderPath);
            if (folderStats.isDirectory()) {
                const folderMacros = readNjkFiles(folder);
                if (folderMacros) {
                    macros.push(...folderMacros);
                }
            }
        });
        return macros;
    } catch (error) {
        console.error(`Error reading directory ${rootDir}:`, error);
        return null;
    }
};