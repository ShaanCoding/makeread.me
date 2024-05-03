import * as fs from 'fs'
import * as path from 'path'

// Read directories and processes blocks.ts files
const readDirectoriesAndConvertToJSON = (directoryPath: string) => {
    const directory: string = path.join(directoryPath, 'public')

    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading root directory: ', err)
            return
        }

        files.forEach((file) => {
            const filePath = path.join(directory, file)
            // Check if it is a directory
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error reading file stats: ', err)
                    return
                }

                if (stats.isDirectory()) {
                    generateBlockJSON(filePath)
                    generateMacroJSON(filePath)
                }
            })
        })
    })
}

const generateBlockJSON = (directoryPath: string) => {
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

    import(blocksFilePath).then((module) => {
        fs.writeFile(path.join(directoryPath, 'blocks.json'), JSON.stringify(module.default), (err) => {
            if (err) {
                console.error('Error writing blocks.json file: ', err)
                return
            }
        })
    })
}


function generateMacroJSON(directoryUrl: string): void {
    const macrosDirectory = path.join(directoryUrl, 'macros');

    const filesAreArray: string[] = fs.readdirSync(macrosDirectory);
    const result: { [key: string]: string } = {};

    for (const file of filesAreArray) {
        const filePath = path.join(macrosDirectory, file);
        if (fs.lstatSync(filePath).isFile()) {
            result[file.replace('.njk', '')] = fs.readFileSync(filePath, { encoding: 'utf8' });
        }
    }

    const outputFile = path.join(directoryUrl, 'macros.json');

    fs.writeFileSync(outputFile, JSON.stringify(result));
}



const rootDirectory: string = path.join(__dirname, '..')
readDirectoriesAndConvertToJSON(rootDirectory)