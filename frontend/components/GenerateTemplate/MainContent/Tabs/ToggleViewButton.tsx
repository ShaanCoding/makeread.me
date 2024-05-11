import { Button } from "@/components/ui/button"
import { GridIcon } from "lucide-react"
import { EditModeOne, EditModeTwo, EditModeThree } from "../types"

const ToggleViewButton: React.FC<{
    numberOfViewsToShow: number
    setNumberOfViewsToShow: React.Dispatch<React.SetStateAction<number>>
    setEditMode: React.Dispatch<React.SetStateAction<EditModeOne | EditModeTwo | EditModeThree>>
}> = ({ numberOfViewsToShow, setNumberOfViewsToShow, setEditMode }) => {

    const alternateNumberOfViewsToShow = () => {
        switch (numberOfViewsToShow) {
            case 3:
                setEditMode(EditModeOne.EDIT)
                setNumberOfViewsToShow(1)
                break;
            case 1:
                setEditMode(EditModeTwo.EDIT_PREVIEW)
                setNumberOfViewsToShow(2)
                break;
            case 2:
                setEditMode(EditModeThree.ALL)
                setNumberOfViewsToShow(3)
                break;
        }
    }

    return (
        <Button variant={'outline'} onClick={alternateNumberOfViewsToShow}>
            Toggle View
            {numberOfViewsToShow === 1 && <GridIcon className="stroke-red-500 ml-2 size-4" />}
            {numberOfViewsToShow === 2 && <GridIcon className="stroke-green-500 ml-2 size-4" />}
            {numberOfViewsToShow === 3 && <GridIcon className="stroke-blue-500 ml-2 size-4" />}
        </Button>
    )
}

export default ToggleViewButton