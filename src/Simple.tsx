import React, { useState } from 'react';

// The editor core
import Editor from '@react-page/editor';

// Load some exemplary plugins:

// The rich text area plugin
import slate from '@react-page/plugins-slate';
// Stylesheets for the rich text area plugin
import '@react-page/plugins-slate/lib/index.css';

// A plugin for background images
import background from '@react-page/plugins-background';
// Stylesheets for  background layout plugin
import '@react-page/plugins-background/lib/index.css';
import { simpleDefaultState } from './Simple-default-state';

// Define which plugins we want to use.
// We only have slate and background available, so load those.
const plugins = {
  // Define plugins for content cells.
  // To import multiple plugins, use [slate(), image, spacer, divider]
  content: [slate()],

  // Define plugins for layout cells
  layout: [background({ defaultPlugin: slate() })],
};

export default () => {
  const [editorValue, setEditorValue] = useState(simpleDefaultState);
  return (
    <Editor
      plugins={plugins}
      defaultPlugin={slate()}
      value={editorValue}
      onChange={setEditorValue}
    />
  );
};
