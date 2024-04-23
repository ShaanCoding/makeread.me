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
};

