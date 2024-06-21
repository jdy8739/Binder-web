/* eslint-disable react/button-has-type */
import { LegacyRef, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import style from './TextEditor.module.scss';

const cx = classNames.bind(style);

type TextEditorProps = {
  className?: string;
  maxLength?: number;
};

const TextEditor = ({ className, maxLength = 3000 }: TextEditorProps) => {
  const quillRef = useRef<
    | (LegacyRef<ReactQuill> & {
        editor: { root: HTMLTextAreaElement };
        getEditor: () => {
          on: (event: 'text-change', callback: () => void) => void;
          getLength: () => number;
        };
      })
    | undefined
  >(undefined);

  const currentLengthSpanRef = useRef<HTMLSpanElement>(null);

  const insertCurrentLength = useCallback((length: number) => {
    const lengthSpan = currentLengthSpanRef.current;

    if (lengthSpan) {
      lengthSpan.innerHTML = String(length);
    }
  }, []);

  useEffect(() => {
    const quill = quillRef.current;

    if (quill) {
      quill.editor.root.setAttribute('spellcheck', 'false');

      const quillEditor = quill.getEditor();

      quillEditor.on('text-change', () => {
        const length = quillEditor.getLength() - 1;

        insertCurrentLength(length);
      });

      insertCurrentLength(0);
    }
  }, [insertCurrentLength]);

  return (
    <div className={cx('text-editor-wrapper', className)}>
      <QuillToolBar />
      <ReactQuill
        ref={quillRef as unknown as LegacyRef<ReactQuill> | undefined}
        className={cx('ql-container')}
        theme="snow"
        placeholder="내용을 입력해주세요."
        modules={{
          toolbar: {
            container: '#toolbar-container',
          },
        }}
      />
      <div className={cx('ql-length')}>
        <span ref={currentLengthSpanRef} />
        <span> / </span>
        <span>{maxLength}</span>
      </div>
    </div>
  );
};

const QuillToolBar = () => {
  return (
    <div id="toolbar-container">
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
      </span>
      <span className="ql-formats">
        <select className="ql-color" />
        <select className="ql-background" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats">
        <button className="ql-header" value="1" />
        <button className="ql-header" value="2" />
        <button className="ql-blockquote" />
        <button className="ql-code-block" />
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
      </span>
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </span>
    </div>
  );
};

export default TextEditor;
export type { TextEditorProps };
