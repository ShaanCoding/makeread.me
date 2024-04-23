/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableSelect = {
    label: string;
    name: string;
    _type: IVariableSelect._type;
    defaultValue: string;
    optionsList: Array<{
        label: string;
        value: string;
    }>;
};
export namespace IVariableSelect {
    export enum _type {
        INPUT = 'input',
        TEXT_AREA = 'textArea',
        CHECK_BOX = 'checkBox',
        LIST = 'list',
        OBJECT = 'object',
        SELECT = 'select',
    }
}

