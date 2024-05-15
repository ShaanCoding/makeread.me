import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi'
import express, { Router } from 'express'
import { ContributorSchema, GithubContributionsListSchema, IssueTypeSchema, PullRequestTypeSchema } from './contributor.model'
import { templateRegistry } from '../templates/template.routes'

export const contributorRegistry = new OpenAPIRegistry()

templateRegistry.register('IIssueType', IssueTypeSchema)
templateRegistry.register('IPullRequestType', PullRequestTypeSchema)
templateRegistry.register('IContributor', ContributorSchema)
templateRegistry.register('IGithubContributionsList', GithubContributionsListSchema)

export const contributorController: Router = (() => {
    const router = express.Router()

    return router
})()
