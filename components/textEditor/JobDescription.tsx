import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const JobDescription = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    // content: "<p>Hello World! 🌎️</p>",
  });
  return (
    <div className="w-full border rounded-lg overflow-hidden bg-card">
      <EditorContent editor={editor} />
    </div>
  );
};

export default JobDescription;
