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
    public getV1Template(): CancelablePromise<{
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
            url: '/v1/template',
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public getV1TemplateIndex(
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
                    _type: string;
                }>;
                _type: 'list';
            } | {
                label: string;
                name: string;
                defaultValue: Record<string, any>;
                objectSchema: Array<{
                    label: string;
                    name: string;
                    _type: string;
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
        }>;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/template/{id}/index',
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
    public getV1TemplateSidebar(
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
                        _type: string;
                    }>;
                    _type: 'list';
                } | {
                    label: string;
                    name: string;
                    defaultValue: Record<string, any>;
                    objectSchema: Array<{
                        label: string;
                        name: string;
                        _type: string;
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
            }>;
        }>;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/template/{id}/sidebar',
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
    public getV1TemplateMacros(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: string;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/template/{id}/macros',
            path: {
                'id': id,
            },
        });
    }
}
