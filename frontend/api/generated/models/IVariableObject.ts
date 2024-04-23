/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableObject = {
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
<<<<<<< HEAD
        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
        description?: string;
=======
        _type: string;
>>>>>>> 966f4ae ([Release] Editor Block & Schema Overhaul (#46))
    }>;
    _type: IVariableObject._type;
};
export namespace IVariableObject {
    export enum _type {
        OBJECT = 'object',
    }
}

