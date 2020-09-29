import React, { useState } from 'react';

import Editor from '@react-page/editor';
import slate from '@react-page/plugins-slate';
import background from '@react-page/plugins-background';

import spacer from '@react-page/plugins-spacer';
import '@react-page/plugins-spacer/lib/index.css';
import { spacerDefaultState } from './spacer-default-state';

const plugins = {
  content: [slate(), spacer],
  // Define plugins for layout cells
  layout: [background({ defaultPlugin: slate() })],
};
export const SpacerPluginExample = () => {
  const [editorValue, setEditorValue] = useState(spacerDefaultState);
  return (
    <Editor
      plugins={plugins}
      defaultPlugin={slate()}
      value={editorValue}
      onChange={setEditorValue}
    />
  );
};
