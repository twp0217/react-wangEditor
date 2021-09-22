import React from 'react';
import Editor from 'wangeditor';
import { WangEditorConfig, WangEditorProps, WangEditorRef } from './interface';
import { getContainer } from './utils';

const defaultProps: WangEditorProps = {
  placeholder: '',
  disabled: false,
  autoFocus: false,
  config: {
    zIndex: 1,
  },
};

const WangEditor = React.forwardRef(
  (props: WangEditorProps, ref: React.Ref<WangEditorRef>) => {
    const { config, className, style, disabled, toolbar, defaultValue, value } =
      props;

    const editorContainerRef = React.useRef<HTMLDivElement>(null);
    const editorRef = React.useRef<Editor | null>(null);

    const [innerValue, setInnerValue] = React.useState<string | undefined>(
      value || defaultValue,
    );

    React.useImperativeHandle(ref, () => ({
      get editor() {
        return editorRef.current!;
      },
    }));

    const getWangEditorConfig = (): WangEditorConfig => {
      return {
        ...defaultProps.config,
        placeholder: props.placeholder,
        focus: props.autoFocus,
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
      };
    };

    const initEditor = (): void => {
      if (editorContainerRef.current) {
        const toolbarContainer = getContainer(toolbar);
        const editor = toolbarContainer
          ? new Editor(toolbarContainer, editorContainerRef.current)
          : new Editor(editorContainerRef.current);
        Object.assign(editor.config, getWangEditorConfig());
        editor.create();
        editor.txt.html(innerValue);
        editorRef.current = editor;
      }
    };

    const destroyEditor = (): void => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };

    React.useEffect(() => {
      initEditor();
      return () => {
        destroyEditor();
      };
    }, [toolbar, editorContainerRef]);

    React.useEffect(() => {
      if (editorRef.current) {
        if (disabled) {
          editorRef.current.disable();
        } else {
          editorRef.current.enable();
        }
      }
    }, [disabled]);

    React.useEffect(() => {
      if (editorRef.current && innerValue !== value) {
        editorRef.current.txt.html(value);
      }
    }, [value]);

    return <div className={className} style={style} ref={editorContainerRef} />;
  },
);

WangEditor.defaultProps = defaultProps;

export default WangEditor;
