import { IVariable, IVariableSelect } from "@/api/generated"
import { Control } from "react-hook-form"

export interface IListFieldProps {
    variables: IVariableSelect
    control: Control
}