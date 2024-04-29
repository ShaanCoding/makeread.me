/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TemplateService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param search
     * @param filter
     * @param pageType
     * @returns any Success
     * @throws ApiError
     */
    public getV1Template(
        search?: string,
        filter?: Array<string>,
        pageType?: string,
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
            pageType: 'None' | 'ReadME' | 'Code of Conduct' | 'Privacy Policy';
        }>;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/template',
            query: {
                'search': search,
                'filter': filter,
                'pageType': pageType,
            },
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public getV1TemplateGetAllSidebar(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: Array<{
            label: string;
            value: string;
        }>;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/template/{id}/getAllSidebar',
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
                    _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
                }>;
                _type: 'list';
            } | {
                label: string;
                name: string;
                defaultValue: Record<string, any>;
                objectSchema: Array<{
                    label: string;
                    name: string;
                    _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
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
            } | {
                label: string;
                name: string;
                defaultValue: string;
                radioList: Array<{
                    label: string;
                    value: string;
                }>;
                _type: 'radio';
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
     * @param search
     * @param filter
     * @returns any Success
     * @throws ApiError
     */
    public getV1TemplateSidebar(
        id: string,
        search?: string,
        filter?: Array<string>,
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
            pageType: 'None' | 'ReadME' | 'Code of Conduct' | 'Privacy Policy';
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
                        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
                    }>;
                    _type: 'list';
                } | {
                    label: string;
                    name: string;
                    defaultValue: Record<string, any>;
                    objectSchema: Array<{
                        label: string;
                        name: string;
                        _type: 'input' | 'textArea' | 'checkBox' | 'list' | 'object' | 'select' | 'radio';
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
                } | {
                    label: string;
                    name: string;
                    defaultValue: string;
                    radioList: Array<{
                        label: string;
                        value: string;
                    }>;
                    _type: 'radio';
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
            query: {
                'search': search,
                'filter': filter,
            },
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public getV1TemplateSideBarOptions(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: Array<{
            label: string;
            value: string;
        }>;
        statusCode: number;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/template/{id}/sideBarOptions',
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
