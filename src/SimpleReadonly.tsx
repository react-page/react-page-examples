import React from 'react';

import Editor from '@react-page/editor';
import slate from '@react-page/plugins-slate';
import background from '@react-page/plugins-background';
import '@react-page/plugins-background/lib/index.css';
import { simpleReadonlyDefaultState } from './SimpleReadonly-default-state';

const plugins = {
  content: [slate()],
  layout: [background({ defaultPlugin: slate() })],
};

export const SimpleReadonlyExample = () => {
  return (
    <Editor
      plugins={plugins}
      defaultPlugin={slate()}
      value={simpleReadonlyDefaultState}
      readOnly={true}
    />
  );
};
