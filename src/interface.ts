import Editor from 'wangeditor';

export type WangEditorConfig = Partial<Editor['config']>;

export type Container = HTMLElement | (() => HTMLElement);

export interface WangEditorProps<T extends string = string> {
  config?: WangEditorConfig;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  toolbar?: Container;
  defaultValue?: T;
  value?: T;
  onChange?: (value: T) => void;
  onFocus?: (value: T) => void;
  onBlur?: (value: T) => void;
}

export interface WangEditorRef {
  editor: Editor;
}
