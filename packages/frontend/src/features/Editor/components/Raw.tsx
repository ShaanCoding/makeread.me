import MarkdownEditor from "@uiw/react-markdown-editor";
import React from "react";

const Raw: React.FC<{ output: string }> = ({ output }) => {
  return <MarkdownEditor value={output} />;
};

export default Raw;
