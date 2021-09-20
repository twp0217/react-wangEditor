# react-wangEditor

wangEditor component for React（基于 React 的富文本编辑器组件）

## 安装

```bash
npm install @twp0217/react-wangeditor
```

## 使用

```typescript
import React from 'react';
import WangEditor from '@twp0217/react-wangeditor';

export default () => {
  return <WangEditor />;
};
```

## API

### WangEditorConfig

> 编辑器配置：[官方文档](https://www.wangeditor.com/doc/)

### WangEditorProps

| 名称         | 类型                    | 默认值 | 说明             |
| ------------ | ----------------------- | ------ | ---------------- |
| config       | WangEditorConfig        | -      | 编辑器配置       |
| placeholder  | React.CSSProperties     | -      | 编辑器输入框提示 |
| defaultValue | string                  | -      | 编辑器默认内容   |
| value        | string                  | -      | 编辑器内容       |
| onChange     | (value: string) => void | -      | 内容变化时的回调 |
| onFocus      | (value: string) => void | -      | 获得焦点时的回调 |
| onBlur       | (value: string) => void | -      | 失去焦点时的回调 |

## 支持

- 如果项目对你有帮助，请点颗星星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
