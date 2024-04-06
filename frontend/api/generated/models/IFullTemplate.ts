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
    image: string;
    dateCreated: string;
    lastUpdated: string;
    tags: Array<{
        name: string;
        url: string;
    }>;
    featured: boolean;
    folder: string;
    functions: Array<{
        name: string;
        description: string;
        function: string;
        variables: Array<{
            label: string;
            name: string;
            defaultValue: (string | boolean | Array<string>);
            _type: string;
        }>;
    }>;
};
