/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IFunction = {
    name: string;
    description: string;
    function: string;
    variables: Array<({
        label: string;
        name: string;
        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select';
        defaultValue: string;
    } | {
        label: string;
        name: string;
        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select';
        defaultValue: boolean;
    } | {
        label: string;
        name: string;
        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select';
        defaultValue: Array<Record<string, any>>;
        listSchema: Array<{
            label: string;
            name: string;
            _type: string;
        }>;
    } | {
        label: string;
        name: string;
        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select';
        defaultValue: Record<string, any>;
        objectSchema: Array<{
            label: string;
            name: string;
            _type: string;
        }>;
    } | {
        label: string;
        name: string;
        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select';
        defaultValue: string;
        optionsList: Array<{
            label: string;
            value: string;
        }>;
    })>;
};

