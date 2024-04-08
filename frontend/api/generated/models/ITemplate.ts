/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ITemplate = {
    title: string;
    description: string;
    author: {
        name: string;
        url: {
            url: string;
            _type: string;
        };
    };
    contributors: Array<{
        name: string;
        url: {
            url: string;
            _type: string;
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
};

