"use client";
import React, { useRef, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import Quote from "@editorjs/quote";
import ImageTool from "@editorjs/image";
import Table from "@editorjs/table";
import Embed from "@editorjs/embed";
import LinkTool from "@editorjs/link";
import SimpleImage from "@editorjs/simple-image";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import RawTool from "@editorjs/raw";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";


const Newstory: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorInstance, setEditorInstance] = useState<EditorJS | null>(null);
  const [editorData, setEditorData] = useState<any>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = new EditorJS({
        holder: editorRef.current,
        tools: {
          header: Header,
          paragraph: Paragraph,
          list: List,
          checklist: Checklist,
          quote: Quote,
          imagetool: ImageTool,
          table: Table,
          embed: Embed,
          linktool: LinkTool,
          simpleimage: SimpleImage,
          codetool: CodeTool,
          delimiter: Delimiter,
          rawTool: RawTool,
          marker: Marker,
          inlinecode: InlineCode,
        },
        autofocus: true,
        onChange: async () => {
          const savedData = await editor.save();
          setEditorData(savedData);
        },
      });

      setEditorInstance(editor);
    }
      console.log(editorData)
    
    // Cleanup: Destroy the editor instance on unmount
    return () => {
      if (editorInstance) {
        editorInstance.destroy();
      
      }
    };

    


  }, []);

  const handlePublish = async ()=>{
    if(editorInstance){
      const data = await editorInstance.save();
      console.log(data)
    }
  }

  
  return (
    <>
      <div className="stories-sec d-flex align-items-center justify-content-center mt-5 container">
        <h1 className="mt-5">New Story</h1>
        <div className="login-btn mt-5 mx-5">
          <Button className="btn btn-style btn-primary active" onClick={handlePublish}>
            Publish 
          </Button>
        </div>
      </div>
      <div>
        <div ref={editorRef}></div>
      </div>
    </>
  );
};

export default Newstory;
