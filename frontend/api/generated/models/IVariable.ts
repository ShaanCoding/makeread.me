/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariable = {
    label: string;
    name: string;
    defaultValue: (string | boolean | Array<string>);
    _type: string;
    listSchema?: Array<{
        label: string;
        name: string;
        _type: string;
    }>;
    objectSchema?: Array<{
        label: string;
        name: string;
        _type: string;
    }>;
    optionsList?: Array<{
        label: string;
        value: string;
    }>;
};

