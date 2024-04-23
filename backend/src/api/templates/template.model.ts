import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { z } from 'zod'

extendZodWithOpenApi(z)

// This is what we would use to
// export type WaitListUser = z.infer<typeof WaitListUserSchema>

export type URLType = z.infer<typeof URLTypeSchema>

export const URLTypeSchema = z.enum(['Facebook', 'Instagram', 'Twitter', 'Github', 'LinkedIn', 'Other'])

export type User = z.infer<typeof UserSchema>

export const UserSchema = z.object({
    name: z.string(),
    url: z.object({
        url: z.string().url(),
        _type: URLTypeSchema,
    }),
})

export const TagSchema = z.object({
    name: z.string(),
    url: z.string(),
})

export type Object = z.infer<typeof ObjectSchema>

export const ObjectSchema = z
    .object({
        label: z.string(),
        name: z.string(),
        _type: z.string(),
    })
    .optional()

export type VariableType = z.infer<typeof VariableTypeSchema>

export const VariableTypeSchema = z.enum(['input', 'textArea', 'checkBox', 'list', 'object', 'select'])

export type Variable = z.infer<typeof VariableSchema>

export const VariableSchema = z.object({
    label: z.string(),
    name: z.string(),
    _type: VariableTypeSchema,
})

// input
export type VariableInput = z.infer<typeof VariableInputSchema>

export const VariableInputSchema = VariableSchema.extend({
    defaultValue: z.string(),
})

// textArea
export type VariableTextArea = z.infer<typeof VariableTextAreaSchema>

export const VariableTextAreaSchema = VariableSchema.extend({
    defaultValue: z.string(),
})

// checkBox
export type VariableCheckBox = z.infer<typeof VariableCheckBoxSchema>

export const VariableCheckBoxSchema = VariableSchema.extend({
    defaultValue: z.boolean(),
})

// list
export type VariableList = z.infer<typeof VariableListSchema>

export const VariableListSchema = VariableSchema.extend({
    defaultValue: z.array(z.record(z.any())),
    listSchema: z.array(ObjectSchema),
})

// object
export type VariableObject = z.infer<typeof VariableObjectSchema>

export const VariableObjectSchema = VariableSchema.extend({
    defaultValue: z.record(z.any()),
    objectSchema: z.array(ObjectSchema),
})

// select
export type VariableSelect = z.infer<typeof VariableSelectSchema>

export const VariableSelectSchema = VariableSchema.extend({
    defaultValue: z.string(),
    optionsList: z.array(z.object({ label: z.string(), value: z.string() })),
})

export type IFunction = z.infer<typeof FunctionSchema>

export const FunctionSchema = z.object({
    name: z.string(),
    description: z.string(),
    function: z.string(),
    variables: z.array(z.union([VariableInputSchema, VariableTextAreaSchema, VariableCheckBoxSchema, VariableListSchema, VariableObjectSchema, VariableSelectSchema])),
})

export type Template = z.infer<typeof TemplateSchema>

export const TemplateSchema = z.object({
    title: z.string(),
    description: z.string(),
    author: UserSchema,
    contributors: z.array(UserSchema),
    startupBlocks: z.array(z.string()),
    image: z.string().url(),
    dateCreated: z.date(),
    lastUpdated: z.date(),
    tags: z.array(TagSchema),
    featured: z.boolean(),
    folder: z.string(),
})

export type FullTemplate = z.infer<typeof FullTemplateSchema>

export const FullTemplateSchema = z.object({
    ...TemplateSchema.shape,
    functions: z.array(FunctionSchema),
})
