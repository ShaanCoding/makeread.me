import CopyButton from "@/components/GenerateTemplate/MainContent/CopyButton";
import DownloadButton from "@/components/GenerateTemplate/MainContent/DownloadButton";
import ReactMarkdownStyled from "@/components/GenerateTemplate/MainContent/Editor/Preview/ReactMarkdownStyled";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Link from "next/link";


const PreviewModalContent: React.FC<{ markdownTemplate: any; setModalOpen: any; folder: string; templateTitle: string }> = ({ markdownTemplate, setModalOpen, folder, templateTitle }) => {
    return (
        <>
            <DialogHeader>
                <DialogTitle>{templateTitle}</DialogTitle>
                <DialogDescription className="">
                    <ReactMarkdownStyled output={markdownTemplate?.data || ""} />
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <div className="w-full flex justify-between gap-6">
                    <div className="flex flex-row gap-6">
                        <CopyButton copiedText={markdownTemplate?.data || ""}
                            onClick={() => {
                                setModalOpen(false)
                            }}
                        />
                        <DownloadButton downloadText={markdownTemplate?.data || ""} fileName={"README.md"}
                            onClick={() => {
                                setModalOpen(false)
                            }}
                        />
                    </div>

                    <Link href={`/generator/${folder}`}>
                        <Button>Use Template</Button>
                    </Link>
                </div>
            </DialogFooter>
        </>
    )
}

export default PreviewModalContent