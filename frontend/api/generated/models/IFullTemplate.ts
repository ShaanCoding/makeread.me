/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IFullTemplate = {
    title: string;
    description: string;
    author: {
        name: string;
        url: {
            url: string;
            _type: IFullTemplate._type;
        };
    };
    contributors: Array<{
        name: string;
        url: {
            url: string;
            _type: 'Facebook' | 'Instagram' | 'Twitter' | 'Github' | 'LinkedIn' | 'Other';
        };
    }>;
    startupBlocks: Array<string>;
    image: string;
    dateCreated: string;
    lastUpdated: string;
    tags: Array<{
        name: string;
        url: string;
    }>;
    featured: boolean;
    folder: string;
    pageType: IFullTemplate.pageType;
    functions: Array<{
        name: string;
        description: string;
        function: string;
        variables: Array<({
            label: string;
            name: string;
<<<<<<< HEAD
            description?: string;
=======
>>>>>>> 966f4ae ([Release] Editor Block & Schema Overhaul (#46))
            defaultValue: string;
            _type: 'input';
        } | {
            label: string;
            name: string;
<<<<<<< HEAD
            description?: string;
=======
>>>>>>> 966f4ae ([Release] Editor Block & Schema Overhaul (#46))
            defaultValue: string;
            _type: 'textArea';
        } | {
            label: string;
            name: string;
<<<<<<< HEAD
            description?: string;
=======
>>>>>>> 966f4ae ([Release] Editor Block & Schema Overhaul (#46))
            defaultValue: boolean;
            _type: 'checkBox';
        } | {
            label: string;
            name: string;
<<<<<<< HEAD
            description?: string;
=======
>>>>>>> 966f4ae ([Release] Editor Block & Schema Overhaul (#46))
            defaultValue: Array<Record<string, any>>;
            listSchema: Array<{
                label: string;
                name: string;
                _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
                description?: string;
            }>;
            _type: 'list';
        } | {
            label: string;
            name: string;
<<<<<<< HEAD
            description?: string;
=======
>>>>>>> 966f4ae ([Release] Editor Block & Schema Overhaul (#46))
            defaultValue: Record<string, any>;
            objectSchema: Array<{
                label: string;
                name: string;
                _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
                description?: string;
            }>;
            _type: 'object';
        } | {
            label: string;
            name: string;
<<<<<<< HEAD
            description?: string;
            defaultValue: string;
            selectList: Array<{
                label: string;
                value: string;
            }>;
            _type: 'select';
        } | {
            label: string;
            name: string;
            description?: string;
            defaultValue: string;
            radioList: Array<{
                label: string;
                value: string;
            }>;
            _type: 'radio';
=======
            defaultValue: string;
            selectList: Array<{
                label: string;
                value: string;
            }>;
            _type: 'select';
>>>>>>> 966f4ae ([Release] Editor Block & Schema Overhaul (#46))
        })>;
    }>;
};
export namespace IFullTemplate {
    export enum _type {
        FACEBOOK = 'Facebook',
        INSTAGRAM = 'Instagram',
        TWITTER = 'Twitter',
        GITHUB = 'Github',
        LINKED_IN = 'LinkedIn',
        OTHER = 'Other',
    }
<<<<<<< HEAD
    export enum pageType {
        NONE = 'None',
        READ_ME = 'ReadME',
        CODE_OF_CONDUCT = 'Code of Conduct',
        PRIVACY_POLICY = 'Privacy Policy',
    }
=======
>>>>>>> 966f4ae ([Release] Editor Block & Schema Overhaul (#46))
}

