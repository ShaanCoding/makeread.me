/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableList = {
    label: string;
    name: string;
    _type: IVariableList._type;
    defaultValue: Array<Record<string, any>>;
    listSchema: Array<{
        label: string;
        name: string;
        _type: string;
    }>;
};
export namespace IVariableList {
    export enum _type {
        INPUT = 'input',
        TEXT_AREA = 'textArea',
        CHECK_BOX = 'checkBox',
        LIST = 'list',
        OBJECT = 'object',
        SELECT = 'select',
    }
}

