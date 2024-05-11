import { EditModeOne, EditModeTwo, EditModeThree } from "../types"
import editModeBooleans from "./editModeBooleans"
import generateNumberOfViewClass from "./generateNumberOfViewClass"


const TabContent: React.FC<{
    numberOfViewsToShow: number,
    editMode: EditModeOne | EditModeTwo | EditModeThree,
    Editor: React.ReactNode,
    Preview: React.ReactNode,
    RawText: React.ReactNode,
}> = ({ numberOfViewsToShow, editMode, Editor, Preview, RawText }) => {


    const numberOfViewClass = generateNumberOfViewClass(numberOfViewsToShow)
    const { showEditor, showPreview, showRawText } = editModeBooleans(editMode)

    return (
        <div className={`rounded-lg border border-dashed shadow-sm grid gap-6 items-start justify-center ${numberOfViewClass}`}>

            <div className={`${showEditor ? 'block' : 'hidden'}`}>
                {Editor}
            </div>

            <div className={`${showPreview ? 'block' : 'hidden'}`}>
                {Preview}
            </div>

            <div className={`${showRawText ? 'block' : 'hidden'}`}>
                {RawText}
            </div>
        </div>
    )
}

export default TabContent