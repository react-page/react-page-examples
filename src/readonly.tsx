import ReactDOM from "react-dom";
import React, { useState } from "react";

import Editor from "@react-page/editor";
import "@react-page/core/lib/index.css";
import "@react-page/ui/lib/index.css";
import slate from "@react-page/plugins-slate";
import "@react-page/plugins-slate/lib/index.css";
import background from "@react-page/plugins-background";
import "@react-page/plugins-background/lib/index.css"; 

const plugins = {
  content: [slate()],
  layout: [background({ defaultPlugin: slate(), imageUpload: null as any })] 
};

const ReadOnly = () => {
  const [editorValue, setEditorValue] = useState(null);
  return (
    <Editor 
      plugins={plugins} 
      defaultPlugin={slate()}
      value={editorValue} 
      onChange={setEditorValue}
      readOnly={true} />
  );
};
ReactDOM.render(<ReadOnly />, document.getElementById("root"));
