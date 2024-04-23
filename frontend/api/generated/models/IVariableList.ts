/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableList = {
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
<<<<<<< HEAD
        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
        description?: string;
=======
        _type: string;
>>>>>>> 966f4ae ([Release] Editor Block & Schema Overhaul (#46))
    }>;
    _type: IVariableList._type;
};
export namespace IVariableList {
    export enum _type {
        LIST = 'list',
    }
}

