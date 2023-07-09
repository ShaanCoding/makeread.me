import MarkdownEditor from "@uiw/react-markdown-editor";
import React from "react";

const Preview: React.FC<{ output: string }> = ({ output }) => {
  return <MarkdownEditor.Markdown source={output} />;
};

export default Preview;
