/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableList = {
    label: string;
    name: string;
    defaultValue: Array<Record<string, any>>;
    listSchema: Array<{
        label: string;
        name: string;
        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
    }>;
    _type: IVariableList._type;
};
export namespace IVariableList {
    export enum _type {
        LIST = 'list',
    }
}

