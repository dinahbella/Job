import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";

const JobDescription = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    // content: "<p>Hello World! 🌎️</p>",
  });
  return (
    <div className="w-full border rounded-lg overflow-hidden bg-card">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default JobDescription;
