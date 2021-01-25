/**
 * @desc 可视化窗口，实现拖拽事件
 */
import React from 'react';
import './index.less';
import Header from './components/Header';
import Editor from './components/Editor';
import useEditorStoreModel from '@store/editor';

function WinCenter() {
  const { dispatchAddComponentAction } = useEditorStoreModel();

  return (
    <div styleName="winCenter">
      <Header />
      {/* 画布 */}
      <div
        styleName="editor-canvas"
        onDrop={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
          const componentName = e.dataTransfer.getData('ComponentName');
          dispatchAddComponentAction(componentName, {
            left: e.nativeEvent.offsetX,
            top: e.nativeEvent.offsetY
          });
        }}
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
        }}
      >
        <Editor />
      </div>
    </div>
  );
}

export default WinCenter;
