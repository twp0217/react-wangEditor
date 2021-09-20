import React from 'react';
import WangEditor from '@twp0217/react-wangeditor';

export default () => {
  const onChange = (html: string): void => {
    console.log('onChange', html);
  };

  const onFocus = (html: string): void => {
    console.log('onFocus', html);
  };

  const onBlur = (html: string): void => {
    console.log('onBlur', html);
  };

  return <WangEditor onChange={onChange} onFocus={onFocus} onBlur={onBlur} />;
};
