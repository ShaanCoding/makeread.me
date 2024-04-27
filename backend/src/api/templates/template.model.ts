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

export type VariableType = z.infer<typeof VariableTypeSchema>

export const VariableTypeSchema = z.enum(['input', 'textArea', 'checkBox', 'list', 'object', 'select', 'radio'])

// object
export type Object = z.infer<typeof ObjectSchema>

export const ObjectSchema = z
    .object({
        label: z.string(),
        name: z.string(),
        _type: VariableTypeSchema,
    })
    .optional()

export type Variable = z.infer<typeof VariableSchema>

export const VariableSchema = z.object({
    label: z.string(),
    name: z.string(),
})

// input
export type VariableInput = z.infer<typeof VariableInputSchema>

export const VariableInputSchema = VariableSchema.extend({
    defaultValue: z.string(),
    _type: z.literal('input'),
})

// textArea
export type VariableTextArea = z.infer<typeof VariableTextAreaSchema>

export const VariableTextAreaSchema = VariableSchema.extend({
    defaultValue: z.string(),
    _type: z.literal('textArea'),
})

// checkBox
export type VariableCheckBox = z.infer<typeof VariableCheckBoxSchema>

export const VariableCheckBoxSchema = VariableSchema.extend({
    defaultValue: z.boolean(),
    _type: z.literal('checkBox'),
})

// list
export type VariableList = z.infer<typeof VariableListSchema>

export const VariableListSchema = VariableSchema.extend({
    defaultValue: z.array(z.record(z.any())),
    listSchema: z.array(ObjectSchema),
    _type: z.literal('list'),
})

// object
export type VariableObject = z.infer<typeof VariableObjectSchema>

export const VariableObjectSchema = VariableSchema.extend({
    defaultValue: z.record(z.any()),
    objectSchema: z.array(ObjectSchema),
    _type: z.literal('object'),
})

// select
export type VariableSelect = z.infer<typeof VariableSelectSchema>

export const VariableSelectSchema = VariableSchema.extend({
    defaultValue: z.string(),
    selectList: z.array(z.object({ label: z.string(), value: z.string() })),
    _type: z.literal('select'),
})

// radio
export type VariableRadio = z.infer<typeof VariableRadioSchema>

export const VariableRadioSchema = VariableSchema.extend({
    defaultValue: z.string(),
    radioList: z.array(z.object({ label: z.string(), value: z.string() })),
    _type: z.literal('radio'),
})

export type IFunction = z.infer<typeof FunctionSchema>

export const FunctionSchema = z.object({
    name: z.string(),
    description: z.string(),
    function: z.string(),
    variables: z.array(
        z.union([VariableInputSchema, VariableTextAreaSchema, VariableCheckBoxSchema, VariableListSchema, VariableObjectSchema, VariableSelectSchema, VariableRadioSchema])
    ),
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
