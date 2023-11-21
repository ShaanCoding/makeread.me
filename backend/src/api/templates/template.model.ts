import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { z } from 'zod'

extendZodWithOpenApi(z)

// This is what we would use to
// export type WaitListUser = z.infer<typeof WaitListUserSchema>

export type User = z.infer<typeof UserSchema>

export const UserSchema = z.object({
    name: z.string(),
    url: z.object({
        url: z.string().url(),
        _type: z.enum(['Facebook', 'Instagram', 'Twitter', 'Github', 'LinkedIn', 'Other']),
    }),
})

export const TagSchema = z.object({
    name: z.string(),
    url: z.string(),
})

export type Template = z.infer<typeof TemplateSchema>

export const TemplateSchema = z.object({
    title: z.string(),
    description: z.string(),
    author: UserSchema,
    contributors: z.array(UserSchema),
    image: z.string().url(),
    dateCreated: z.date(),
    lastUpdated: z.date(),
    tags: z.array(TagSchema),
    featured: z.boolean(),
    folder: z.string(),
})

export type Function = z.infer<typeof FunctionSchema>

export const FunctionSchema = z.object({
    name: z.string(),
    description: z.string(),
    function: z.string(),
    variables: z.array(
        z.object({
            label: z.string(),
            name: z.string(),
            defaultValue: z.union([z.string(), z.boolean(), z.array(z.string())]),
            _type: z.enum(['text', 'boolean', 'array']),
        })
    ),
})

export type FullTemplate = z.infer<typeof FullTemplateSchema>

export const FullTemplateSchema = z.object({
    ...TemplateSchema.shape,
    functions: z.array(FunctionSchema),
})
