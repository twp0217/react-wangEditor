import React from 'react';
import WangEditor from '@twp0217/react-wangeditor';

export default () => {
  const [html, setHtml] = React.useState<string>('<p>初始内容</p>');

  const onChange = (html: string): void => {
    setHtml(html);
    console.log('onChange', html);
  };

  return (
    <>
      <WangEditor value={html} onChange={onChange} />
      <div>编辑器内容：</div>
      {html}
    </>
  );
};
