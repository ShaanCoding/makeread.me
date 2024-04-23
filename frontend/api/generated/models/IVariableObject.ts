/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableObject = {
    label: string;
    name: string;
    _type: IVariableObject._type;
    defaultValue: Record<string, any>;
    objectSchema: Array<{
        label: string;
        name: string;
        _type: string;
    }>;
};
export namespace IVariableObject {
    export enum _type {
        INPUT = 'input',
        TEXT_AREA = 'textArea',
        CHECK_BOX = 'checkBox',
        LIST = 'list',
        OBJECT = 'object',
        SELECT = 'select',
    }
}

