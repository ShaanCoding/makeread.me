import * as fs from 'fs'
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid'
import { FullTemplate, IFunction, Variable, VariableObjectSchema } from '../src/api/templates/template.model'

// Read directories and processes blocks.ts files
const readDirectoriesAndConvertToJSON = async (directoryPath: string) => {
    const directory: string = path.join(directoryPath, 'public')

    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading root directory: ', err)
            return
        }

        files.forEach((file) => {
            const filePath = path.join(directory, file)
            // Check if it is a directory
            fs.stat(filePath, async (err, stats) => {
                if (err) {
                    console.error('Error reading file stats: ', err)
                    return
                }

                if (stats.isDirectory()) {
                    const variableToUUIDMap: Map<string, string> | undefined = await generateBlockJSON(filePath)

                    if (!variableToUUIDMap) {
                        return
                    }

                    generateMacroJSON(filePath, variableToUUIDMap)
                }
            })
        })
    })
}

const generateBlockJSON = async (directoryPath: string): Promise<Map<string, string> | undefined> => {
    // Check if block.ts file exists
    let blocksFilePath: string = path.join(directoryPath, 'blocks.ts')
    const doesBlockFileExist: boolean = fs.existsSync(blocksFilePath)

    if (!doesBlockFileExist) {
        console.error('blocks.ts file does not exist in the directory: ', directoryPath)
        return
    }

    // if windows, we have to add file:// to the path
    if (process.platform === 'win32') {
        blocksFilePath = 'file://' + blocksFilePath
    }

    const variableToUUIDMap: Map<string, string> = new Map()

    const importedData = await import(blocksFilePath)
    const data: FullTemplate = importedData.default

    data.functions.forEach((func: IFunction) => {
        // Update the macros name
        const functionUUID = uuidv4().replaceAll('-', '')
        variableToUUIDMap.set(func.function, functionUUID)
        func.function = functionUUID

        func.variables.forEach((variable: Variable) => {
            const variableUUID = uuidv4().replaceAll('-', '')
            variableToUUIDMap.set(variable.name, variableUUID)
            variable.name = variableUUID
        })
    })

    data.startupBlocks = data.startupBlocks.map((element) => variableToUUIDMap.get(element)!)

    fs.writeFile(path.join(directoryPath, 'blocks.json'), JSON.stringify(data), (err) => {
        if (err) {
            console.error('Error writing blocks.json file: ', err)
            return undefined
        }
    })

    return variableToUUIDMap
}

function generateMacroJSON(directoryUrl: string, variableToUUIDMap: Map<string, string>): void {
    const macrosDirectory = path.join(directoryUrl, 'macros')

    const filesList: string[] = fs.readdirSync(macrosDirectory)
    const result: { [key: string]: string } = {}

    for (const file of filesList) {
        const filePath = path.join(macrosDirectory, file)
        if (fs.lstatSync(filePath).isFile()) {
            let data = fs.readFileSync(filePath, { encoding: 'utf8' })

            //  foreach ofthis hashmap
            Array.from(variableToUUIDMap).forEach(([key, value]) => {
                data = data.replace(new RegExp(key, 'g'), value)
                console.log('replacing', key, value)
            })

            result[variableToUUIDMap.get(file.replace('.njk', ''))!] = data
        }
    }

    const outputFile = path.join(directoryUrl, 'macros.json')

    fs.writeFileSync(outputFile, JSON.stringify(result))
}

const rootDirectory: string = path.join(__dirname, '..')
readDirectoriesAndConvertToJSON(rootDirectory)
