/**
 * @description 画布-编辑区域
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import useEditorStoreModel from '@store/editor';

function Editor() {
  const { editorComponentList, dispatchAddComponentAction } = useEditorStoreModel();
  return (
    <div
      styleName="editor"
      onDrop={(e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const componentName = e.dataTransfer.getData('ComponentName');
        dispatchAddComponentAction(componentName);
      }}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
      }}
    >
      {editorComponentList.length > 0 &&
        editorComponentList.map((EditComponent: any, index: number) => {
          return <EditComponent key={index} />;
        })}
    </div>
  );
}

export default Editor;
