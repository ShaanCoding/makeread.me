/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableInput = {
    label: string;
    name: string;
    _type: IVariableInput._type;
    defaultValue: string;
};
export namespace IVariableInput {
    export enum _type {
        INPUT = 'input',
        TEXT_AREA = 'textArea',
        CHECK_BOX = 'checkBox',
        LIST = 'list',
        OBJECT = 'object',
        SELECT = 'select',
    }
}

