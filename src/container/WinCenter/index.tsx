/**
 * @desc 可视化窗口
 */
import React from 'react';
import './index.less';
import Header from './components/Header';
import Editor from './components/Editor';

function WinCenter() {
  return (
    <div styleName="winCenter">
      <Header />
      {/* 画布 */}
      <div styleName="editor-canvas">
        <Editor />
      </div>
    </div>
  );
}

export default WinCenter;
