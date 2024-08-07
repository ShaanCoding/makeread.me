import { FullTemplate, IFunction, Template } from '../../src/api/templates/template.model'

const templateHeadData: Template = {
    title: 'Readme Templates - Frontend',
    description: 'This repository provides a series of README templates to help developers document their projects 🚀👩\u200d💻',
    author: {
        name: 'Fernanda Kipper',
        url: {
            url: 'https://github.com/Fernanda-Kipper',
            _type: 'Github',
        },
    },
    contributors: [
        {
            name: 'Shaan Khan',
            url: {
                url: 'https://github.com/ShaanCoding',
                _type: 'Github',
            },
        },
    ],
    image: 'https://github.com/Fernanda-Kipper/Readme-Templates/raw/main/.github/logo.png',
    dateCreated: new Date('2024-04-14T00:00:00.000Z'),
    lastUpdated: new Date('2024-04-14T12:00:00.000Z'),
    tags: [
        {
            name: 'Read Me',
            url: 'read-me',
        },
        {
            name: 'Recommended',
            url: 'recommended',
        },
        {
            name: 'MIT',
            url: 'mit',
        },
        {
            name: 'Frontend',
            url: 'frontend',
        },
    ],
    featured: false,
    folder: 'fernanda-kipper-readme-templates-frontend',
    pageType: 'ReadME',
    startupBlocks: [
        'projectHeaderMacro',
        'layoutMacro',
        'technologiesMacro',
        'gettingStartedMacro',
        'prerequisitesMacro',
        'cloningMacro',
        'startingMacro',
        'collaboratorsMacro',
        'contributeMacro',
        'documentationThatMightHelpMacro',
    ],
}

const functionsList: IFunction[] = [
    {
        name: 'Header',
        description: 'This function creates a project header with the project title.',
        function: 'projectHeaderMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Project Title',
                name: 'projectTitle',
                defaultValue: 'Project name 💻',
                _type: 'input',
            },
            {
                label: 'Enable Technologies Section',
                name: 'isTechnologiesSection',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Enable Getting Started Section',
                name: 'isGettingStartedSection',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Enable Collaborators Section',
                name: 'isCollaboratorsSection',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Enable Contribute Section',
                name: 'isContributeSection',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Project Description',
                name: 'projectDescription',
                defaultValue: 'Simple description of what your project do or how to use it',
                _type: 'textArea',
            },
            {
                label: 'Call to Action',
                name: 'projectCallToAction',
                _type: 'object',
                defaultValue: {
                    url: 'https://github.com/ShaanCoding',
                    text: '📱 Visit this Project',
                },
                objectSchema: [
                    {
                        label: 'URL',
                        name: 'url',
                        _type: 'input',
                    },
                    {
                        label: 'Text',
                        name: 'text',
                        _type: 'input',
                    },
                ],
            },
        ],
    },
    {
        name: 'Layout',
        description: 'This function creates a layout for the README file.',
        function: 'layoutMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Image List',
                name: 'layoutImageList',
                _type: 'list',
                defaultValue: [
                    {
                        url: 'https://picsum.photos/1080/1920',
                        altTag: 'Random Image',
                    },
                    {
                        url: 'https://picsum.photos/1080/1920',
                        altTag: 'Random Image',
                    },
                ],
                listSchema: [
                    {
                        label: 'Image',
                        name: 'url',
                        _type: 'input',
                    },
                    {
                        label: 'Alt Tag',
                        name: 'altTag',
                        _type: 'input',
                    },
                ],
            },
        ],
    },
    {
        name: 'Technologies',
        description: 'This function lists the technologies used in the project.',
        function: 'technologiesMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Technology Description',
                name: 'technologyDescription',
                defaultValue: '- list of all technologies you used\r\n- react\r\n- styled components\r\n- another example',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Getting Started',
        description: 'This function provides a guide on how to get started with the project.',
        function: 'gettingStartedMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Getting Started Description',
                name: 'gettingStartedDescription',
                defaultValue: 'Here you describe how to run your project locally',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Prerequisites',
        description: 'This function provides a guide on the prerequisites for the project.',
        function: 'prerequisitesMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Prerequisites Description',
                name: 'prerequisitesDescription',
                defaultValue:
                    'Here you list all prerequisites necessary for running your project. For example:\r\n\r\n- [NodeJS](https://github.com/)\r\n- [Git 2](https://github.com)',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Cloning',
        description: 'This function provides a guide on how to clone the project.',
        function: 'cloningMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Cloning Description',
                name: 'cloningDescription',
                defaultValue: 'How to clone your project\r\n\r\n```bash\r\ngit clone your-project-url-in-github\r\n```',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Starting',
        description: 'This function provides a guide on how to start the project.',
        function: 'startingMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Starting Description',
                name: 'startingDescription',
                defaultValue: 'How to start your project\r\n\r\n```bash\r\ncd project-name\r\nnpm some-command-to-run\r\n```',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Collaborators',
        description: 'This function lists the collaborators of the project.',
        function: 'collaboratorsMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Collaborators Description',
                name: 'collaboratorsDescription',
                defaultValue: 'Special thank you for all people that contributed for this project.',
                _type: 'textArea',
            },
            {
                label: 'Collaborators List',
                name: 'collaboratorsList',
                _type: 'list',
                defaultValue: [
                    {
                        name: 'Fernanda Kipper',
                        profilePictureURL: 'https://avatars.githubusercontent.com/u/61896274?v=4',
                        githubURL: 'https://github.com/Fernanda-Kipper',
                    },
                    {
                        name: 'Shaan Khan',
                        profilePictureURL: 'https://avatars.githubusercontent.com/u/22236218?v=4',
                        githubURL: 'https://github.com/ShaanCoding',
                    },
                ],
                listSchema: [
                    {
                        label: 'Name',
                        name: 'name',
                        _type: 'input',
                    },
                    {
                        label: 'Profile Picture URL',
                        name: 'profilePictureURL',
                        _type: 'input',
                    },
                    {
                        label: 'Github URL',
                        name: 'githubURL',
                        _type: 'input',
                    },
                ],
            },
        ],
    },
    {
        name: 'Contribute',
        description: 'This function provides a guide on how to contribute to the project.',
        function: 'contributeMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Contribute Description',
                name: 'contributeDescription',
                defaultValue:
                    'Here you will explain how other developers can contribute to your project. For example, explaining how can create their branches, which patterns to follow and how to open an pull request\r\n\r\n1. `git clone https://github.com/Fernanda-Kipper/text-editor.git`\r\n2. `git checkout -b feature/NAME`\r\n3. Follow commit patterns\r\n4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Documentation That Might Help',
        description: 'This function provides a list of documentation that might help the user.',
        function: 'documentationThatMightHelpMacro',
        folder: 'fernanda-kipper-readme-templates-frontend',
        variables: [
            {
                label: 'Documentation Description',
                name: 'documentationThatMightHelpDescription',
                defaultValue:
                    '[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)\r\n\r\n[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)',
                _type: 'textArea',
            },
        ],
    },
]

const templateData: FullTemplate = {
    ...templateHeadData,
    functions: functionsList,
}

export default templateData
