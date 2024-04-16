import { IVariable } from "@/api/generated"
import { Control } from "react-hook-form"

export interface IListFieldProps {
    variables: IVariable
    control: Control
}