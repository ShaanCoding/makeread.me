/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TemplateService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any Success
     * @throws ApiError
     */
    public getTemplate(): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: Array<{
            title: string;
            description: string;
            author: {
                name: string;
                url: {
                    url: string;
                    _type: 'Facebook' | 'Instagram' | 'Twitter' | 'Github' | 'LinkedIn' | 'Other';
                };
            };
            contributors: Array<{
                name: string;
                url: {
                    url: string;
                    _type: 'Facebook' | 'Instagram' | 'Twitter' | 'Github' | 'LinkedIn' | 'Other';
                };
            }>;
            startupBlocks: Array<string>;
            image: string;
            dateCreated: string;
            lastUpdated: string;
            tags: Array<{
                name: string;
                url: string;
            }>;
            featured: boolean;
            folder: string;
        }>;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/template',
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public getTemplateIndex(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: Array<{
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
        }>;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/template/{id}/index',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public getTemplateSidebar(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: Array<{
            title: string;
            description: string;
            author: {
                name: string;
                url: {
                    url: string;
                    _type: 'Facebook' | 'Instagram' | 'Twitter' | 'Github' | 'LinkedIn' | 'Other';
                };
            };
            contributors: Array<{
                name: string;
                url: {
                    url: string;
                    _type: 'Facebook' | 'Instagram' | 'Twitter' | 'Github' | 'LinkedIn' | 'Other';
                };
            }>;
            startupBlocks: Array<string>;
            image: string;
            dateCreated: string;
            lastUpdated: string;
            tags: Array<{
                name: string;
                url: string;
            }>;
            featured: boolean;
            folder: string;
            functions: Array<{
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
            }>;
        }>;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/template/{id}/sidebar',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public getTemplateMacros(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: string;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/template/{id}/macros',
            path: {
                'id': id,
            },
        });
    }
}
