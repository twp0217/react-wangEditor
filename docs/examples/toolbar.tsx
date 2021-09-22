import React from 'react';
import WangEditor from '@twp0217/react-wangeditor';
import './toolbar.less';

export default () => {
  const toolbarRef = React.useRef<HTMLDivElement>(null);

  return (
    <div>
      <p>container 和 toolbar 分开</p>
      <div>
        <div className="toolbar" ref={toolbarRef}></div>
        <p>------ 我是分割线 ------</p>
        <WangEditor className="text" toolbar={() => toolbarRef.current} />
      </div>
    </div>
  );
};
