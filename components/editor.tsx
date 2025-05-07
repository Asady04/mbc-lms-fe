import React, { useState, useRef, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function RichInput(props: any) {
  const editor = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const config = useMemo(() => ({
    uploader: {
      insertImageAsBase64URI: true,
      imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
    },
  }), []);

  if (!mounted) return null; // Prevents SSR issues
  
  return (
    <div className="w-full">
      <JoditEditor
        ref={editor}
        value={props.content}
        config={config}
        onChange={(value) => props.setContent(value)}
        className="h-[70%] w-full bg-white"
      />
      <style>{`.jodit-wysiwyg{height:300px !important}`}</style>
    </div>
  );
}
