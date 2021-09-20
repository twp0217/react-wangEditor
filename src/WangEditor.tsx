import React from 'react';
import Editor from 'wangeditor';
import { WangEditorConfig, WangEditorProps } from './interface';

const WangEditor = (props: WangEditorProps) => {
  const { config, defaultValue, value } = props;

  const divRef = React.useRef<HTMLDivElement>(null);
  const editorRef = React.useRef<Editor>();

  const [innerValue, setInnerValue] = React.useState<string | undefined>(
    value || defaultValue,
  );

  const getWangEditorConfig = (): WangEditorConfig => {
    return {
      ...config,
      onchange: (html: string) => {
        config?.onchange?.(html);
        setInnerValue(html);
        props.onChange?.(html);
      },
      onfocus: (html: string) => {
        config?.onfocus?.(html);
        props.onFocus?.(html);
      },
      onblur: (html: string) => {
        config?.onblur?.(html);
        props.onBlur?.(html);
      },
      placeholder: props.placeholder || config?.placeholder || '',
    };
  };

  const initEditor = (): void => {
    if (!!divRef.current) {
      const editor = new Editor(divRef.current);
      Object.assign(editor.config, getWangEditorConfig());
      editor.create();
      editor.txt.html(innerValue);
      editorRef.current = editor;
    }
  };

  const destroyEditor = (): void => {
    if (editorRef.current) {
      editorRef.current.destroy();
    }
  };

  React.useEffect(() => {
    initEditor();
    return () => {
      destroyEditor();
    };
  }, [divRef]);

  React.useEffect(() => {
    if (!!editorRef.current && innerValue !== value) {
      editorRef.current.txt.html(value);
    }
  }, [value]);

  return <div ref={divRef} />;
};

export default WangEditor;
