import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { z } from 'zod'
import { URLTypeSchema } from '../templates/template.model'

extendZodWithOpenApi(z)

export type IssueType = z.infer<typeof IssueTypeSchema>
export const IssueTypeSchema = z.enum(['OpenIssue', 'ClosedIssueDone', 'ClosedIssueCancelled'])

export type PullRequestType = z.infer<typeof PullRequestTypeSchema>
export const PullRequestTypeSchema = z.enum(['PullRequestOpen', 'PullRequestMerged', 'PullRequestCancelled', 'PullRequestDraft'])

export type GithubContributionsList = z.infer<typeof GithubContributionsListSchema>
export const GithubContributionsListSchema = z.object({
    name: z.string(),
    url: z.string(),
    type: z.union([IssueTypeSchema, PullRequestTypeSchema]),
})

export type Contributor = z.infer<typeof ContributorSchema>
export const ContributorSchema = z.object({
    name: z.string(),
    image: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.array(z.object({
        _type: URLTypeSchema,
        url: z.string(),
    })),
    contributions: z.array(GithubContributionsListSchema),
})
