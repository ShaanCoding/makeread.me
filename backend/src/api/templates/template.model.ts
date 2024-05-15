import mongoose, { Schema, Document } from 'mongoose'
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

export type Tag = z.infer<typeof TagSchema>

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
        description: z.string().optional(),
    })
    .optional()

export type Variable = z.infer<typeof VariableSchema>

export const VariableSchema = z.object({
    label: z.string(),
    name: z.string(),
    description: z.string().optional(),
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
    folder: z.string(),
})

export type PageType = z.infer<typeof PageTypeSchema>

export const PageTypeSchema = z.enum(['None', 'ReadME', 'Code of Conduct', 'Privacy Policy'])

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
    pageType: PageTypeSchema,
})

export type FullTemplate = z.infer<typeof FullTemplateSchema>

export const FullTemplateSchema = z.object({
    ...TemplateSchema.shape,
    functions: z.array(FunctionSchema),
})

export type SideBarOptions = z.infer<typeof SideBarOptionsSchema>

export const SideBarOptionsSchema = z.object({
    label: z.string(),
    value: z.string(),
})

export type DefaultBlockInput = z.infer<typeof DefaultBlockInputSchema>

export const DefaultBlockInputSchema = z.object({
    function: z.string(),
    folder: z.string(),
})

// Mongoose ///////////////////////////////////////////////////////////////
// TODO: Figure out how to use zod with mongoose

const MongooseURLTypeSchema = {
    type: String,
    enum: ['Facebook', 'Instagram', 'Twitter', 'Github', 'LinkedIn', 'Other'],
}

const MongooseUserSchema = new Schema({
    name: { type: String, required: true },
    url: {
        type: {
            url: { type: String, required: true },
            _type: MongooseURLTypeSchema,
        },
        required: true,
    },
})

const MongooseTagSchema = new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
})

const MongooseFunctionSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    function: { type: String, required: true },
    variables: [{ type: Object, required: true }],
    folder: { type: String, required: true },
})

const MongoosePageTypeSchema = {
    type: String,
    enum: ['None', 'ReadME', 'Code of Conduct', 'Privacy Policy'],
}

const MongooseFullTemplateSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: MongooseUserSchema, required: true },
    contributors: [MongooseUserSchema],
    startupBlocks: [String],
    image: { type: String, required: false }, // TODO: is "required:false` correct?
    dateCreated: { type: Date, required: true },
    lastUpdated: { type: Date, required: true },
    tags: [MongooseTagSchema],
    featured: { type: Boolean, required: true },
    folder: { type: String, required: true },
    pageType: MongoosePageTypeSchema,
    functions: [MongooseFunctionSchema],
})

// Macros ///////////////////////////////////////////////////////////////

export interface Macro extends Document {
    folder: string,
    name: string,
    content: string,
}

const macroSchema = new Schema({
    folder: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
  });
  

export const FullTemplateModel = mongoose.model<FullTemplate>('FullTemplate', MongooseFullTemplateSchema)
export const MacroModel = mongoose.model<Macro>('Macro', macroSchema)
