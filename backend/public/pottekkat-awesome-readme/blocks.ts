import { FullTemplate, IFunction, Template } from '../../src/api/templates/template.model'

const templateHeadData: Template = {
    title: 'Awesome ReadME',
    description: 'A template for writing a useful README.',
    author: {
        name: 'Navendu Pottekkat',
        url: {
            url: 'https://github.com/pottekkat',
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
    image: 'https://github.com/pottekkat/awesome-readme/raw/master/header.png',
    dateCreated: new Date('2024-04-15T00:00:00.000Z'),
    lastUpdated: new Date('2024-04-15T12:00:00.000Z'),
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
    ],
    featured: true,
    folder: 'pottekkat-awesome-readme',
    pageType: 'ReadME',
    startupBlocks: [
        'bannerMacro',
        'headerMacro',
        'quickStartDemoMacro',
        'tableOfContentsMacro',
        'installationMacro',
        'usageMacro',
        'developmentMacro',
        'contributeMacro',
        'licenseMacro',
    ],
}

const functionsList: IFunction[] = [
    {
        name: 'Banner',
        description: 'A banner for your project.',
        function: 'bannerMacro',
        folder: 'pottekkat-awesome-readme',
        variables: [
            {
                label: 'Banner Image',
                name: 'bannerImage',
                defaultValue: {
                    url: 'https://github.com/pottekkat/awesome-readme/raw/master/header.png',
                    altTag: 'Awesome ReadME',
                },
                _type: 'object',
                objectSchema: [
                    {
                        label: 'Banner Image URL',
                        name: 'url',
                        _type: 'input',
                    },
                    {
                        label: 'Banner Image Alt Text',
                        name: 'altTag',
                        _type: 'input',
                    },
                ],
            },
        ],
    },
    {
        name: 'Header',
        description: 'A header for your project.',
        function: 'headerMacro',
        folder: 'pottekkat-awesome-readme',
        variables: [
            {
                label: 'Title',
                name: 'headerTitle',
                defaultValue: 'Project Title',
                _type: 'input',
            },
            {
                label: 'Badges',
                name: 'badgeList',
                defaultValue: [
                    {
                        url: 'https://img.shields.io/github/v/release/navendu-pottekkat/awesome-readme?include_prereleases',
                        altTag: 'GitHub release (latest by date including pre-releases)',
                    },
                    {
                        url: 'https://img.shields.io/github/last-commit/navendu-pottekkat/awesome-readme',
                        altTag: 'GitHub last commit',
                    },
                    {
                        url: 'https://img.shields.io/github/issues-raw/navendu-pottekkat/awesome-readme',
                        altTag: 'GitHub issues',
                    },
                    {
                        url: 'https://img.shields.io/github/issues-pr/navendu-pottekkat/awesome-readme',
                        altTag: 'GitHub pull requests',
                    },
                    {
                        url: 'https://img.shields.io/github/license/navendu-pottekkat/awesome-readme',
                        altTag: 'GitHub',
                    },
                ],
                _type: 'list',
                listSchema: [
                    {
                        label: 'Badge URL',
                        name: 'url',
                        _type: 'input',
                    },
                    {
                        label: 'Badge Alt Text',
                        name: 'altTag',
                        _type: 'input',
                    },
                ],
            },
            {
                label: 'Header Description',
                name: 'headerDescription',
                defaultValue:
                    "The project title is a level 1 heading (`<h1>Project Title</h1>` or `# Project Title`).\n\nIf your project has a name, then this is where it would go.\n\nIf your project does not have a name, you can use this space to explain the project. For example, code repositories of research papers usually have the paper title here.\n\nYou can also add your branding in a cover image. It makes the README unique and gets people's attention quickly.\n\nWait, I forgot something. You can use this README as a template from [this link](README-template.md).\n\nI usually prefer the dimensions 1280×650. It has worked well for me so far. I can also reuse it as my social preview image for the repo.\n\nBelow the title, you will see some badges. These can be used to show the status of the project.\n\nThe badges used here were generated with [shields.io](https://shields.io/).\n\nYou can add a workflow status badge to indicate the status of your workflows in your README. This can used to answer questions like, `is the build working?` or `are the e2e tests passing?`.\n\nThe badges used here are explained below:\n\n<!-- Add badges with link to Shields IO -->\n\n![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/navendu-pottekkat/awesome-readme?include_prereleases)\n: Shows the current release version.\n\n![GitHub last commit](https://img.shields.io/github/last-commit/navendu-pottekkat/awesome-readme)\n: Shows the last commit time. Good indication of the project activity.\n\n![GitHub issues](https://img.shields.io/github/issues-raw/navendu-pottekkat/awesome-readme)\n: Dynamic badge that shows the number of open issues in the project.\n\n![GitHub pull requests](https://img.shields.io/github/issues-pr/navendu-pottekkat/awesome-readme)\n: Similar dynamic badge, but for pull requests.\n\n![GitHub](https://img.shields.io/github/license/navendu-pottekkat/awesome-readme)\n: Shows the open source license the project uses.",
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Quick Start / Demo',
        description: 'A quick start guide or a demo for your project.',
        function: 'quickStartDemoMacro',
        folder: 'pottekkat-awesome-readme',
        variables: [
            {
                label: 'Demo Preview',
                name: 'demoPreview',
                defaultValue: {
                    url: 'https://picsum.photos/1920/1080',
                    altTag: 'Demo Preview',
                },
                _type: 'object',
                objectSchema: [
                    {
                        label: 'Demo Preview Image URL',
                        name: 'url',
                        _type: 'input',
                    },
                    {
                        label: 'Demo Preview Image Alt Text',
                        name: 'altTag',
                        _type: 'input',
                    },
                ],
            },
            {
                label: 'Demo Description',
                name: 'demoDescription',
                defaultValue:
                    'I believe that you should bring value to the reader as soon as possible. You should be able to get the user up and running with your project with minimal friction.\n\nIf you have a quickstart guide, this is where it should be.\n\nAlternatively, you can add a demo to show what your project can do.',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Table of Contents',
        description: 'A table of contents for your project.',
        function: 'tableOfContentsMacro',
        folder: 'pottekkat-awesome-readme',
        variables: [
            {
                label: 'Table of Contents Description',
                name: 'tableOfContentsDescription',
                defaultValue: 'This is a table of contents for your project. It helps the reader navigate through the README quickly.',
                _type: 'textArea',
            },
            {
                label: 'Is Title Enabled',
                name: 'isTitleEnabled',
                defaultValue: {
                    title: 'Project Title',
                    url: 'project-title',
                    isEnabled: true,
                },
                _type: 'object',
                objectSchema: [
                    {
                        label: 'Title',
                        name: 'title',
                        _type: 'input',
                    },
                    {
                        label: 'URL',
                        name: 'url',
                        _type: 'input',
                    },
                    {
                        label: 'Is Enabled',
                        name: 'isEnabled',
                        _type: 'checkBox',
                    },
                ],
            },
            {
                label: 'Is Quick Start / Demo Enabled',
                name: 'isQuickstartDemoEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Is Table of Contents Enabled',
                name: 'isTableOfContentsEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Is Installation Enabled',
                name: 'isInstallationEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Is Usage Enabled',
                name: 'isUsageEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Is Development Enabled',
                name: 'isDevelopmentEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Is Contribute Enabled',
                name: 'isContributeEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Is License Enabled',
                name: 'isLicenseEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
        ],
    },
    {
        name: 'Installation',
        description: 'Instructions on how to install your project.',
        function: 'installationMacro',
        folder: 'pottekkat-awesome-readme',
        variables: [
            {
                label: 'Is Back to Top Enabled',
                name: 'isBackToTopEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Installation Description',
                name: 'installationDescription',
                defaultValue:
                    '> **Note**: For longer README files, I usually add a "Back to top" buttton as shown above. It makes it easy to navigate.\n\nThis is where your installation instructions go.\n\nYou can add snippets here that your readers can copy-paste with click:\n\n```shell\ngh repo clone navendu-pottekkat/awesome-readme\n```',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Usage',
        description: 'Instructions on how to use your project.',
        function: 'usageMacro',
        folder: 'pottekkat-awesome-readme',
        variables: [
            {
                label: 'Is Back to Top Enabled',
                name: 'isBackToTopEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Usage Description',
                name: 'usageDescription',
                defaultValue: 'Next, you have to explain how to use your project. You can create subsections under here to explain more clearly.',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Development',
        description: 'Instructions on how to develop your project.',
        function: 'developmentMacro',
        folder: 'pottekkat-awesome-readme',
        variables: [
            {
                label: 'Is Back to Top Enabled',
                name: 'isBackToTopEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Development Description',
                name: 'developmentDescription',
                defaultValue:
                    'You have people who want to use your project and then you have people who want contribute to your project.\n\nThis is where you provide instructions for the latter.\n\nAdd instructions on how to set up a development environment, clone, and build the project.\n\nYou can use the code snippets here as well:\n\n```shell\ncommand to clone your project\ncommand to build your project\ncommand to run your project in development mode\n```',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'Contribute',
        description: 'Instructions on how to contribute to your project.',
        function: 'contributeMacro',
        folder: 'pottekkat-awesome-readme',
        variables: [
            {
                label: 'Is Back to Top Enabled',
                name: 'isBackToTopEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'Contribute Description',
                name: 'contributeDescription',
                defaultValue:
                    'You can use this section to highlight how people can contribute to your project.\n\nYou can add information on how they can open issues or how they can sponsor the project.',
                _type: 'textArea',
            },
        ],
    },
    {
        name: 'License',
        description: 'The license for your project.',
        function: 'licenseMacro',
        folder: 'pottekkat-awesome-readme',
        variables: [
            {
                label: 'Is Back to Top Enabled',
                name: 'isBackToTopEnabled',
                defaultValue: true,
                _type: 'checkBox',
            },
            {
                label: 'License Description',
                name: 'licenseDescription',
                defaultValue: 'You can also mention what license the project uses. I usually add it like this:\n\n[MIT license](./LICENSE)\n',
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
