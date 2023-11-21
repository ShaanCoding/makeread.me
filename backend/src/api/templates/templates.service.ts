import { StatusCodes } from 'http-status-codes'

import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse'

import { Function, Template, FullTemplateSchema } from './template.model'
import TemplateRepository from './template.repository'

export default class TemplateController {
    public async getAllTemplates(): Promise<ServiceResponse<Template[] | null>> {
        try {
            const data: Template = await new TemplateRepository().getTemplateData()
            return new ServiceResponse<Template[]>(ResponseStatus.Success, 'Success', [data, data, data, data, data, data], StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get templates', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    public async getTemplateById(id: string): Promise<ServiceResponse<Function | null>> {
        try {
            console.log('id', id)
            const data: Function[] = [
                {
                    name: 'Project Header',
                    description: 'This is the project header',
                    function: 'projectHeader',
                    variables: [
                        {
                            label: 'Username',
                            name: 'username',
                            defaultValue: 'shaancoding',
                            _type: 'text',
                        },
                        {
                            label: 'Repository Name',
                            name: 'repository',
                            defaultValue: 'ReadME-Generator',
                            _type: 'text',
                        },
                        {
                            label: 'Logo URL',
                            name: 'logoURL',
                            defaultValue: 'https://github.com/ShaanCoding/ReadME-Generator/blob/readme-generator-2020/images/logo.png?raw=true',
                            _type: 'text',
                        },
                        {
                            label: 'Headline',
                            name: 'headline',
                            defaultValue: 'ReadME Generator',
                            _type: 'text',
                        },
                        {
                            label: 'Catchphrase',
                            name: 'catchphrase',
                            defaultValue: 'An Awesome ReadME Generator To Jumpstart Your Projects!',
                            _type: 'text',
                        },
                        {
                            label: 'Enable Header Icons',
                            name: 'enableHeaderIcons',
                            defaultValue: true,
                            _type: 'boolean',
                        },
                    ],
                },
                {
                    name: 'Table of Contents',
                    description: 'This is the table of contents',
                    function: 'tableOfContents',
                    variables: [],
                },
                {
                    name: 'About Project',
                    description: 'This is the about project',
                    function: 'aboutProject',
                    variables: [
                        {
                            label: 'Showcase Image URL',
                            name: 'showcaseURL',
                            defaultValue: 'https://via.placeholder.com/150',
                            _type: 'text',
                        },
                        {
                            label: 'About This Project Description',
                            name: 'aboutDescription',
                            defaultValue: 'This is a description about this project',
                            _type: 'text',
                        },
                    ],
                },
            ]

            return new ServiceResponse<Function[]>(ResponseStatus.Success, 'Success', data, StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    public async getTemplateSidebar(id: string): Promise<ServiceResponse<FullTemplateSchema[] | null>> {
        try {
            console.log('id', id)

            /*
    In sidebar we map the following:
    - Template Name
    - Template Description
    - Functions Mapped
         - Function Name
         - Function Description
         - Function Function name
         - Add Button
    */

            const data: FullTemplateSchema[] = [
                {
                    title: 'Best ReadME Template',
                    description: 'This is a template',
                    author: {
                        name: 'Othneil Drew',
                        url: {
                            url: 'github.com/othneildrew',
                            _type: 'Github',
                        },
                    },
                    contributors: [
                        {
                            name: 'ShaanCoding',
                            url: {
                                url: 'shaancoding.github.io',
                                _type: 'Other',
                            },
                        },
                    ],
                    image: 'https://via.placeholder.com/150',
                    dateCreated: new Date(),
                    lastUpdated: new Date(),
                    tags: [
                        {
                            name: 'ReadMe',
                            url: 'readme',
                        },
                        {
                            name: 'Default',
                            url: 'default',
                        },
                    ],
                    featured: true,
                    folder: 'readme-one',
                    functions: [
                        {
                            name: 'Project Header',
                            description: 'This is the project header',
                            function: 'projectHeader',
                            variables: [
                                {
                                    label: 'Username',
                                    name: 'username',
                                    defaultValue: 'shaancoding',
                                    _type: 'text',
                                },
                                {
                                    label: 'Repository Name',
                                    name: 'repository',
                                    defaultValue: 'ReadME-Generator',
                                    _type: 'text',
                                },
                                {
                                    label: 'Logo URL',
                                    name: 'logoURL',
                                    defaultValue: 'https://github.com/ShaanCoding/ReadME-Generator/blob/readme-generator-2020/images/logo.png?raw=true',
                                    _type: 'text',
                                },
                                {
                                    label: 'Headline',
                                    name: 'headline',
                                    defaultValue: 'ReadME Generator',
                                    _type: 'text',
                                },
                                {
                                    label: 'Catchphrase',
                                    name: 'catchphrase',
                                    defaultValue: 'An Awesome ReadME Generator To Jumpstart Your Projects!',
                                    _type: 'text',
                                },
                                {
                                    label: 'Enable Header Icons',
                                    name: 'enableHeaderIcons',
                                    defaultValue: true,
                                    _type: 'boolean',
                                },
                            ],
                        },
                        {
                            name: 'Table of Contents',
                            description: 'This is the table of contents',
                            function: 'tableOfContents',
                            variables: [],
                        },
                        {
                            name: 'About Project',
                            description: 'This is the about project',
                            function: 'aboutProject',
                            variables: [
                                {
                                    label: 'Showcase Image URL',
                                    name: 'showcaseURL',
                                    defaultValue: 'https://via.placeholder.com/150',
                                    _type: 'text',
                                },
                                {
                                    label: 'About This Project Description',
                                    name: 'aboutDescription',
                                    defaultValue: 'This is a description about this project',
                                    _type: 'text',
                                },
                            ],
                        },
                        {
                            name: 'Built With',
                            description: 'This is the built with',
                            function: 'builtWith',
                            variables: [
                                {
                                    label: 'Built With Description',
                                    name: 'builtWithDescription',
                                    defaultValue: 'This project was built with the following technologies',
                                    _type: 'text',
                                },
                                {
                                    label: 'Built With Name',
                                    name: 'builtWithName',
                                    defaultValue: ['HTML', 'CSS', 'JavaScript'],
                                    _type: 'array',
                                },
                                {
                                    label: 'Built With URL',
                                    name: 'builtWithURL',
                                    defaultValue: ['https://www.w3schools.com/html/', 'https://www.w3schools.com/css/', 'https://www.w3schools.com/js/'],
                                    _type: 'array',
                                },
                            ],
                        },
                    ],
                },
            ]

            return new ServiceResponse<FullTemplateSchema[]>(ResponseStatus.Success, 'Success', data, StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    public async getTemplateMacros(id: string): Promise<ServiceResponse<string | null>> {
        try {
            console.log('id', id)
            const data: string = `
{% macro projectHeader() %}

{% if enableHeaderIcons %}
<br/>
<p align="center">
<a href="https://github.com/{{ username }}/{{ repository }}">
    <img src="{{ logoURL }}" alt="Logo" width="80" height="80">
</a>
{% endif %}

<h3 align="center">{{ headline }}</h3>

<p align="center">
    {{ catchphrase }}
    <br/>
    Note This Project Is Still W.I.P
    <br/>
    <br/>
    <a href="https://readme.shaankhan.dev"><strong>View Demo »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/ShaanCoding/ReadME-Generator">Explore the docs</a>
    .
    <a href="https://github.com/ShaanCoding/ReadME-Generator/issues">Report Bug</a>
    .
    <a href="https://github.com/ShaanCoding/ReadME-Generator/issues">Request Feature</a>
</p>
</p>
{% endmacro %}

{% macro tableOfContents() %}
## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Creating A Pull Request](#creating-a-pull-request)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)
{% endmacro %}

{% macro aboutProject() %}
## About The Project

![Screen Shot](https://github.com/ShaanCoding/ReadME-Generator/blob/readme-generator-2020/images/screenshot.png?raw=true)

There are many great ReadME templates available on GitHub, however, I struggled to find any ReadME generators. Throughout my open source project contributions, I've had to spend numerous hours editing README files which I could've spent developing instead. This paired with me often forgetting to change links, titles, and sections made me look for a README generator.

Whilst alternative options existed, I struggled to find one that could suit my needs whilst being fast and easy to use, the ones I found were command-line based, only taking a limited input with the inability to go back on, as such I've built this, a README Generator!

With this open-source project, I hope to allow you to save as much time as it saved me, the benefits of this project are huge and here's why:

- Your time should be focused on creating something amazing. A project that solves a problem and helps others
- You shouldn't be doing the same tasks over and over like creating a README from scratch
- You should element DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. Whilst this template has served my needs, it may not serve yours, so I'll be continuing to work on this to make a more "Universal" and "Flexible" ReadME Generator in the future. Feel free to suggest changes by opening a new issue, or if you want to implement your own, feel free to fork this repo and create a pull request.
{% endmacro %}

{% macro builtWith() %}

## Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [AAA](AA)
* [BBB](BB)

{% endmacro %}
            `
            return new ServiceResponse<string>(ResponseStatus.Success, 'Success', data, StatusCodes.OK)
        } catch (ex) {
            return new ServiceResponse(ResponseStatus.Failed, 'Failed to get template macros', null, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }
}
