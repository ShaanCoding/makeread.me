import { FullTemplate, IFunction, Template } from '../../src/api/templates/template.model'

const templateHeadData: Template = {
    title: 'Best README Template',
    description: 'An awesome README template to jumpstart your projects!',
    author: {
        name: 'Othneil Drew',
        url: {
            url: 'https://github.com/othneildrew',
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
    image: 'https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png',
    dateCreated: new Date('2024-04-13T00:00:00.000Z'),
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
    ],
    featured: true,
    folder: 'othneildrew-best-readme-template',
    pageType: 'ReadME',
    startupBlocks: [
        'projectHeaderMacro',
        'aboutTheProjectMacro',
        'builtWithMacro',
        'gettingStartedMacro',
        'prerequisitesMacro',
        'installationMacro',
        'usageMacro',
        'roadmapMacro',
        'contributingMacro',
        'licenseMacro',
        'contactMacro',
        'acknowledgmentsMacro',
    ],
}

const projectHeaderFunction: IFunction = {
    name: 'Project Header',
    description: 'This is the project header',
    function: 'projectHeaderMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Logo URL',
            name: 'logoURL',
            defaultValue: 'https://picsum.photos/400',
            _type: 'input',
        },
        {
            label: 'Headline',
            name: 'headline',
            defaultValue: 'ReadME Generator',
            _type: 'input',
        },
        {
            label: 'Catchphrase',
            name: 'catchphrase',
            defaultValue: 'An awesome README template to jumpstart your projects!',
            _type: 'input',
        },
        {
            label: 'Explore The Docs URL',
            name: 'exploreTheDocsURL',
            defaultValue: 'https://github.com/ShaanCoding/ReadME-Generator/',
            _type: 'input',
        },
        {
            label: 'View Demo URL',
            name: 'viewDemoURL',
            defaultValue: 'https://github.com/ShaanCoding/ReadME-Generator/',
            _type: 'input',
        },
        {
            label: 'Report Bug URL',
            name: 'reportBugURL',
            defaultValue: 'https://github.com/ShaanCoding/ReadME-Generator/issues/new?labels=bug&template=bug-report---.md',
            _type: 'input',
        },
        {
            label: 'Request Feature URL',
            name: 'requestFeatureURL',
            defaultValue: 'https://github.com/ShaanCoding/ReadME-Generator/issues/new?labels=enhancement&template=feature-request---.md',
            _type: 'input',
        },
    ],
}

const aboutTheProjectFunction: IFunction = {
    name: 'About The Project',
    description: 'This is the about the project section',
    function: 'aboutTheProjectMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Product Screenshot',
            name: 'productScreenshot',
            defaultValue: {
                altTag: 'Product Screenshot',
                url: 'https://picsum.photos/1920/1080',
            },
            _type: 'object',
            objectSchema: [
                {
                    label: 'Product Screenshot Alt Tag',
                    name: 'altTag',
                    _type: 'input',
                },
                {
                    label: 'Product Screenshot URL',
                    name: 'url',
                    _type: 'input',
                },
            ],
        },
        {
            label: 'Description',
            name: 'aboutTheProjectDescription',
            defaultValue:
                "There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.\n\nHere's why:\n\n- Your time should be focused on creating something amazing. A project that solves a problem and helps others\n- You shouldn't be doing the same tasks over and over like creating a README from scratch\n- You should implement DRY principles to the rest of your life :smile:\n\nOf course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!\n\nUse the `BLANK_README.md` to get started.",
            _type: 'textArea',
        },
    ],
}

const builtWithFunction: IFunction = {
    name: 'Built With',
    description: 'This is the built with section',
    function: 'builtWithMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Description',
            name: 'builtWithDescription',
            defaultValue:
                'This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.',
            _type: 'textArea',
        },
        {
            label: 'Built With List',
            name: 'builtWithList',
            defaultValue: [
                {
                    name: 'Next',
                    url: 'https://nextjs.org',
                },
                {
                    name: 'React',
                    url: 'https://reactjs.org',
                },
                {
                    name: 'Vue',
                    url: 'https://vuejs.org',
                },
                {
                    name: 'Angular',
                    url: 'https://angular.io',
                },
                {
                    name: 'Svelte',
                    url: 'https://svelte.dev',
                },
                {
                    name: 'Laravel',
                    url: 'https://laravel.com',
                },
                {
                    name: 'Bootstrap',
                    url: 'https://getbootstrap.com',
                },
                {
                    name: 'JQuery',
                    url: 'https://jquery.com',
                },
            ],
            _type: 'list',
            listSchema: [
                {
                    label: 'Name',
                    name: 'name',
                    _type: 'input',
                },
                {
                    label: 'URL',
                    name: 'url',
                    _type: 'input',
                },
            ],
        },
    ],
}

const gettingStartedFunction: IFunction = {
    name: 'Getting Started',
    description: 'This is the getting started section',
    function: 'gettingStartedMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Description',
            name: 'gettingStartedDescription',
            defaultValue:
                'This is an example of how you may give instructions on setting up your project locally.\nTo get a local copy up and running follow these simple example steps.',
            _type: 'textArea',
        },
    ],
}

const prerequisitesFunction: IFunction = {
    name: 'Prerequisites',
    description: 'This is the prerequisites section',
    function: 'prerequisitesMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Prerequisites Description',
            name: 'prerequisitesDescription',
            defaultValue: 'This is an example of how to list things you need to use the software and how to install them.\n\n- npm\n  ```sh\n  npm install npm@latest -g\n  ```',
            _type: 'textArea',
        },
    ],
}

const installationFunction: IFunction = {
    name: 'Installation',
    description: 'This is the installation section',
    function: 'installationMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Installation Description',
            name: 'installationDescription',
            defaultValue:
                '_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn\'t rely on any external dependencies or services._\n\n1. Get a free API Key at [https://example.com](https://example.com)\n2. Clone the repo\n   ```sh\n   git clone https://github.com/your_username_/Project-Name.git\n   ```\n3. Install NPM packages\n   ```sh\n   npm install\n   ```\n4. Enter your API in `config.js`\n   ```js\n   const API_KEY = "ENTER YOUR API";\n   ```',
            _type: 'textArea',
        },
    ],
}

const usageFunction: IFunction = {
    name: 'Usage',
    description: 'This is the usage section',
    function: 'usageMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Usage Description',
            name: 'usageDescription',
            defaultValue:
                'Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.\n\n_For more examples, please refer to the [Documentation](https://example.com)_',
            _type: 'textArea',
        },
    ],
}

const roadmapFunction: IFunction = {
    name: 'Roadmap',
    description: 'This is the roadmap section',
    function: 'roadmapMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Roadmap Description',
            name: 'roadmapDescription',
            defaultValue:
                '- [x] Add Changelog\n- [x] Add back to top links\n- [ ] Add Additional Templates w/ Examples\n- [ ] Add "components" document to easily copy & paste sections of the readme\n- [ ] Multi-language Support\n  - [ ] Chinese\n  - [ ] Spanish',
            _type: 'textArea',
        },
        {
            label: 'Open Issues URL',
            name: 'openIssuesURL',
            defaultValue: 'https://github.com/ShaanCoding/ReadME-Generator/issues',
            _type: 'input',
        },
    ],
}

const contributingFunction: IFunction = {
    name: 'Contributing',
    description: 'This is the contributing section',
    function: 'contributingMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Contributing Description',
            name: 'contributingDescription',
            defaultValue:
                "Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.\n\nIf you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag \"enhancement\".\nDon't forget to give the project a star! Thanks again!\n\n1. Fork the Project\n2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)\n3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)\n4. Push to the Branch (`git push origin feature/AmazingFeature`)\n5. Open a Pull Request",
            _type: 'textArea',
        },
    ],
}

const licenseFunction: IFunction = {
    name: 'License',
    description: 'This is the license section',
    function: 'licenseMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'License Name',
            name: 'licenseName',
            defaultValue: 'MIT',
            _type: 'input',
        },
        {
            label: 'License URL',
            name: 'licenseURL_url',
            defaultValue: 'https://opensource.org/licenses/MIT',
            _type: 'input',
        },
    ],
}

const contactFunction: IFunction = {
    name: 'Contact',
    description: 'This is the contact section',
    function: 'contactMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Contact Description',
            name: 'contactDescription',
            defaultValue:
                'Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com\n\nProject Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)',
            _type: 'textArea',
        },
    ],
}

const acknowledgementsFunction: IFunction = {
    name: 'Acknowledgments',
    description: 'This is the acknowledgments section',
    function: 'acknowledgmentsMacro',
    folder: 'othneildrew-best-readme-template',
    variables: [
        {
            label: 'Acknowledgments Description',
            name: 'acknowledgmentsDescription',
            defaultValue: "Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!",
            _type: 'textArea',
        },
        {
            label: 'Acknowledgments List',
            name: 'acknowledgmentsList',
            defaultValue: [
                {
                    name: 'makeread.me',
                    url: 'https://github.com/ShaanCoding/ReadME-Generator',
                },
                {
                    name: 'othneildrew',
                    url: 'https://github.com/othneildrew/Best-README-Template',
                },
            ],
            _type: 'list',
            listSchema: [
                {
                    label: 'Name',
                    name: 'name',
                    _type: 'input',
                },
                {
                    label: 'URL',
                    name: 'url',
                    _type: 'input',
                },
            ],
        },
    ],
}

const functionsList: IFunction[] = [
    projectHeaderFunction,
    aboutTheProjectFunction,
    builtWithFunction,
    gettingStartedFunction,
    prerequisitesFunction,
    installationFunction,
    usageFunction,
    roadmapFunction,
    contributingFunction,
    licenseFunction,
    contactFunction,
    acknowledgementsFunction,
]

const templateData: FullTemplate = {
    ...templateHeadData,
    functions: functionsList,
}

export default templateData
