/**
 * @description 画布-编辑区域
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import * as Types from '@common/types/component';
import useEditorStoreModel from '@store/editor';
import useMouseEventHook from '@hooks/useMouseEventHook';
import { stopPropagation } from '@common/utils';

function Editor() {
  const { editorComponentList, dispatchChooseCurrentEditorComponent } = useEditorStoreModel();
  const mouseComponentInEditor = useMouseEventHook();

  function handleOnMouseDown(e: React.MouseEvent, componentIndex: number) {
    stopPropagation(e);
    mouseComponentInEditor(componentIndex, e);
  }

  function handleOnClick(e: React.MouseEvent, componentIndex: number) {
    stopPropagation(e);
    // 选中当前的组件
    dispatchChooseCurrentEditorComponent(componentIndex);
  }

  return (
    <div styleName="editor">
      {editorComponentList.length > 0 &&
        editorComponentList.map((EditComponent: Types.IStoreComponentProps, componentIndex: number) => {
          return (
            <div
              styleName="wrapper-component"
              key={EditComponent.componentId}
              style={{
                left: EditComponent?.style?.left || 0,
                top: EditComponent?.style?.top || 0,
                zIndex: EditComponent?.style?.zIndex || 0,
                cursor: EditComponent?.style?.cursor || 'default'
              }}
              onMouseDown={(e: React.MouseEvent) => {
                handleOnMouseDown(e, componentIndex);
              }}
              onClick={(e: React.MouseEvent) => {
                handleOnClick(e, componentIndex);
              }}
            >
              {EditComponent.componentInstance && <EditComponent.componentInstance key={EditComponent.componentId} />}
            </div>
          );
        })}
    </div>
  );
}

export default Editor;
