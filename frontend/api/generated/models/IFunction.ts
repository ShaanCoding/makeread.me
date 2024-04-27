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
        defaultValue: string;
        _type: 'input';
    } | {
        label: string;
        name: string;
        defaultValue: string;
        _type: 'textArea';
    } | {
        label: string;
        name: string;
        defaultValue: boolean;
        _type: 'checkBox';
    } | {
        label: string;
        name: string;
        defaultValue: Array<Record<string, any>>;
        listSchema: Array<{
            label: string;
            name: string;
            _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
        }>;
        _type: 'list';
    } | {
        label: string;
        name: string;
        defaultValue: Record<string, any>;
        objectSchema: Array<{
            label: string;
            name: string;
            _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
        }>;
        _type: 'object';
    } | {
        label: string;
        name: string;
        defaultValue: string;
        selectList: Array<{
            label: string;
            value: string;
        }>;
        _type: 'select';
    })>;
};

