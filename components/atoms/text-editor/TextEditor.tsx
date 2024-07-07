'use client';

/* eslint-disable react/button-has-type */
import { LegacyRef, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import style from './TextEditor.module.scss';

const cx = classNames.bind(style);

type TextEditorProps = {
  className?: string;
  maxLength?: number;
  placeholder?: string;
};

type QuillEditor = {
  editor: { root: HTMLTextAreaElement };
  getEditor: () => {
    on: (event: 'text-change', callback: () => void) => void;
    getLength: () => number;
  };
};

const TextEditor = ({ className, maxLength, placeholder }: TextEditorProps) => {
  const quillRef = useRef<ReactQuill & QuillEditor>(null);

  const [editorLength, setEditorLength] = useState(0);

  useEffect(() => {
    const { current: quill } = quillRef;

    if (quill) {
      quill.editor.root.setAttribute('spellcheck', 'false');

      if (maxLength) {
        const quillEditor = quill.getEditor();

        quillEditor.on('text-change', () => {
          const length = quillEditor.getLength() - 1;

          if (length > maxLength) {
            quillEditor.deleteText(maxLength, length);
          } else {
            setEditorLength(length);
          }
        });

        setEditorLength(0);
      }
    }
  }, [maxLength]);

  return (
    <div className={cx('text-editor-wrapper', className)}>
      <QuillToolBar />
      <ReactQuill
        ref={quillRef as unknown as LegacyRef<ReactQuill>}
        className={cx('ql-container')}
        theme="snow"
        placeholder={placeholder || '내용을 입력해주세요.'}
        modules={{
          toolbar: {
            container: '#toolbar-container',
          },
        }}
      />
      {Boolean(maxLength) && (
        <div className={cx('ql-length')}>
          <span>{editorLength}</span>
          <span> / </span>
          <span>{maxLength}</span>
        </div>
      )}
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
