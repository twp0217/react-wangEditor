import React from 'react';
import WangEditor from '@twp0217/react-wangeditor';

export default () => {
  return (
    <WangEditor
      config={{
        menus: ['bold', 'head', 'link', 'italic', 'underline'],
      }}
    />
  );
};
