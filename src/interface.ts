import Editor from 'wangeditor';

export type WangEditorConfig = Partial<Editor['config']>;

export interface WangEditorProps<T extends string = string> {
  config?: WangEditorConfig;
  placeholder?: string;
  defaultValue?: T;
  value?: T;
  onChange?: (value: T) => void;
  onFocus?: (value: T) => void;
  onBlur?: (value: T) => void;
}
