import React from 'react';
import WangEditor, { WangEditorRef } from '@twp0217/react-wangeditor';

export default () => {
  const wangEditorRef = React.useRef<WangEditorRef>();

  const onClick = () => {
    console.log('editor-ref', wangEditorRef.current.editor);
  };

  return (
    <>
      <WangEditor ref={wangEditorRef} />
      <button onClick={onClick}>打印editor ref</button>
    </>
  );
};
