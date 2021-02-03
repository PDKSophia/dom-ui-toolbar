/**
 * @desc 可视化窗口，实现拖拽事件
 */
import React from 'react';
import './index.less';
import Header from './components/Header';
import Editor from './components/Editor';
import useEditorStoreModel from '@store/editor';
import useScreenSizeModel from '@store/screenSize';

function WinCenter() {
  const { selectPcSize } = useScreenSizeModel();
  const { editorComponentList, dispatchAddComponentAction } = useEditorStoreModel();

  return (
    <div styleName="winCenter">
      <Header />
      {/* 画布 */}
      <div
        style={{
          width: selectPcSize?.WIDTH || 800,
          height: selectPcSize?.HEIGHT || 450
        }}
        styleName="editor-canvas"
        onDrop={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
          const componentName = e.dataTransfer.getData('componentName');
          const componentInnerText = e.dataTransfer.getData('componentInnerText');
          let componentDomStyle: React.CSSProperties = {};
          try {
            componentDomStyle = JSON.parse(e.dataTransfer.getData('componentDomStyle'));
          } catch (err) {
            componentDomStyle = {};
          }
          dispatchAddComponentAction(componentName, componentInnerText, {
            ...componentDomStyle,
            left: e.nativeEvent.offsetX,
            top: e.nativeEvent.offsetY,
            zIndex: editorComponentList.length
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
