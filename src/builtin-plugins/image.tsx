import React, { useState } from 'react';

import Editor from '@react-page/editor';
import slate from '@react-page/plugins-slate';
import background, { ModeEnum } from '@react-page/plugins-background';

import { imagePlugin } from '@react-page/plugins-image';
import { ImageUploadType } from '@react-page/ui/lib/ImageUpload/types';
import '@react-page/plugins-image/lib/index.css';

import { imageDefaultState } from './image-default-state';

const fakeImageUploadService: (url: string) => ImageUploadType = (
  defaultUrl
) => (file, reportProgress) => {
  return new Promise((resolve, reject) => {
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      reportProgress(counter * 10);
      if (counter > 9) {
        clearInterval(interval);
        alert(
          'This is a fake image upload service, please provide actual implementation via plugin properties'
        );
        resolve({ url: defaultUrl });
      }
    }, 500);
  });
};

const plugins = {
  content: [
    slate(),
    imagePlugin({ imageUpload: fakeImageUploadService('/images/react.png') }),
  ],
  layout: [
    background({
      defaultPlugin: slate(),
      imageUpload: fakeImageUploadService('/images/sea-bg.jpg'),
      enabledModes:
        ModeEnum.COLOR_MODE_FLAG |
        ModeEnum.IMAGE_MODE_FLAG |
        ModeEnum.GRADIENT_MODE_FLAG,
    }),
  ],
};

export const ImagePluginExample = () => {
  const [editorValue, setEditorValue] = useState(imageDefaultState);
  return (
    <Editor
      plugins={plugins}
      defaultPlugin={slate()}
      value={editorValue}
      onChange={setEditorValue}
    />
  );
};
