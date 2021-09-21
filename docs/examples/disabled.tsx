import React from 'react';
import WangEditor from '@twp0217/react-wangeditor';

export default () => {
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const onClick = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <WangEditor disabled={disabled} />
      <button onClick={onClick}>{disabled ? '启用' : '禁用'}</button>
    </>
  );
};
