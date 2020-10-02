import React, { useState } from 'react';
import Editor from '@react-page/editor';

import slate from '@react-page/plugins-slate';
import '@react-page/plugins-slate/lib/index.css';
import background from '@react-page/plugins-background';
import '@react-page/plugins-background/lib/index.css';
import { basicDefaultState } from './default-state';
import { basicCustomContentPlugin } from './basic-custom-content-plugin';

const plugins = {
  content: [slate(), basicCustomContentPlugin()],
  layout: [background({ defaultPlugin: slate() })],
};
export const BasicContentPluginExample = () => {
  const [editorValue, setEditorValue] = useState(basicDefaultState);
  return (
    <Editor
      plugins={plugins}
      defaultPlugin={slate()}
      value={editorValue}
      onChange={setEditorValue}
    />
  );
};
