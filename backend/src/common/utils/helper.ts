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

const readNjkFiles = (dirPath: string, parentFolder: string): Macro[] | null => {
    const macros: Macro[] = [];
    const macrosDirPath = path.join(dirPath, 'macros');
    try {
        const files = fs.readdirSync(macrosDirPath);
        return files.map(file => {
            const filePath = path.join(macrosDirPath, file);
            const stats = fs.statSync(filePath);
            if (!stats.isDirectory() && path.extname(file) === '.njk') {
                const content = fs.readFileSync(filePath, 'utf-8').replace(/\r?\n/g, '\\r\\n');
                const macroName = path.basename(file, '.njk');
                const folder = parentFolder;
                return { folder, name: macroName, content };
            }
            return null;
        }).filter(macro => macro !== null) as Macro[];
    } catch (error) {
        console.error(`Error reading directory ${macrosDirPath}:`, error);
        return null;
    }
};

export const createMacroObjects = (): Macro[] | null => {
    const macros: Macro[] = [];
    const rootDir = './public';
    try {
        const folders = fs.readdirSync(rootDir);
        folders.forEach(folder => {
            const folderPath = path.join(rootDir, folder);
            const folderStats = fs.statSync(folderPath);
            if (folderStats.isDirectory()) {
                const folderMacros = readNjkFiles(folderPath, folder);
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