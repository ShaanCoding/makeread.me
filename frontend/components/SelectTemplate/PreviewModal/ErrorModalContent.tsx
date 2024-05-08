import { Button } from "@/components/ui/button"
import { DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog"

const ErrorModalContent: React.FC<{ setModalOpen: any }> = ({ setModalOpen }) => {
    return (
        <>
            <DialogHeader>
                <DialogTitle>Error Fetching Template Preview</DialogTitle>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-red-500 text-xl font-semibold m-6">An error occurred while fetching the markdown preview</h4>
                </div>
            </DialogHeader>
            <DialogFooter>
                <Button onClick={() => setModalOpen(false)}>Close</Button>
            </DialogFooter>
        </>
    )
}

export default ErrorModalContent