import { Template } from './template.model'

export default class TemplateRepository {
    getTemplateData = async (): Template => {
        const data = {
            title: 'Sample Test Data adasdadasdasdadsa',
            description: 'This is a sample description for the test data.',
            author: {
                name: 'John Doe',
                url: { url: 'https://github.com/ShaanCoding', _type: 'Github' },
            },
            contributors: [
                {
                    name: 'Jane Doe',
                    url: { url: 'https://github.com/ShaanCoding', _type: 'Github' },
                },
                {
                    name: 'Robert Smith',
                    url: { url: 'https://github.com/ShaanCoding', _type: 'Github' },
                },
            ],
            image: 'https://source.unsplash.com/random',
            dateCreated: new Date('2022-01-01T00:00:00.000Z'), // Update the type to Date
            lastUpdated: new Date('2022-01-15T12:00:00.000Z'),
            tags: [
                {
                    name: 'test',
                    url: 'test',
                },
                {
                    name: 'zod',
                    url: 'zod',
                },
                {
                    name: 'sample',
                    url: 'sample',
                },
            ],
            featured: true,
            folder: 'tests',
        } as Template

        return data
    }
}
