import { EditModeOne, EditModeTwo, EditModeThree } from "../types"
import editModeBooleans from "./editModeBooleans"
import generateNumberOfViewClass from "./generateNumberOfViewClass"
import TabContentMotionDiv from "./TabContentMotionDiv"



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
        <div className={numberOfViewClass}>
            <TabContentMotionDiv show={showEditor}>{Editor}</TabContentMotionDiv>
            <TabContentMotionDiv show={showPreview}>{Preview}</TabContentMotionDiv>
            <TabContentMotionDiv show={showRawText}>{RawText}</TabContentMotionDiv>
        </div>
    )
}


export default TabContent