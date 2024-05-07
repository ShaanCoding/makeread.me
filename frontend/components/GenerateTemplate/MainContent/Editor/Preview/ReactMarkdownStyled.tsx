import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

// TODO:
// https://github.com/rehypejs/rehype-sanitize
// To sanitise
// To add table formatting
// To add code formatting
// To add image formatting & github image formatting

const ReactMarkdownStyled = ({ output }: { output: string }) => {
    return (
        <ReactMarkdown
            skipHtml={false}
            rehypePlugins={[rehypeRaw, remarkGfm]}
            components={{
                h1: ({ node, ...props }) => (
                    <h1 {...props} className="my-4 text-center text-4xl font-bold" />
                ),
                h2: ({ node, ...props }) => (
                    <h2 {...props} className="my-4 text-3xl font-bold" />
                ),
                h3: ({ node, ...props }) => (
                    <h3 {...props} className="my-4 text-2xl font-bold" />
                ),
                h4: ({ node, ...props }) => (
                    <h4 {...props} className="my-4 text-xl font-bold" />
                ),
                h5: ({ node, ...props }) => (
                    <h5 {...props} className="my-4 text-lg font-bold" />
                ),
                h6: ({ node, ...props }) => (
                    <h6 {...props} className="my-4 text-base font-bold" />
                ),
                p: ({ node, ...props }) => (
                    <p {...props} className="my-4 text-base" />
                ),
                ul: ({ node, ...props }) => (
                    <ul {...props} className="my-4 list-inside list-disc pl-6" />
                ),
                ol: ({ node, ...props }) => (
                    <ol {...props} className="my-4 list-inside list-decimal pl-6" />
                ),
                li: ({ node, ...props }) => {
                    if (
                        Array.isArray(props.children) &&
                        props.children[0]?.props?.type === "checkbox"
                    ) {
                        return <li {...props} className="my-4 list-none text-base" />
                    } else {
                        return <li {...props} className="my-4 text-base" />
                    }
                },
                blockquote: ({ node, ...props }) => (
                    <blockquote {...props} className="my-4 text-base" />
                ),
                code: ({ node, ...props }) => (
                    <code
                        {...props}
                        className="my-4 rounded-md bg-white bg-opacity-10 p-1 text-base"
                    />
                ),
                pre: ({ node, ...props }) => (
                    <pre {...props} className="my-4 text-base" />
                ),
                a: ({ node, ...props }) => (
                    <a
                        {...props}
                        className="text-hoverBlue my-4 text-base hover:underline"
                    />
                ),
                img: ({ node, ...props }) => (
                    <img {...props} className="my-4 rounded-xl text-base" />
                ),
            }}
        >
            {output}
        </ReactMarkdown>)
}

export default ReactMarkdownStyled