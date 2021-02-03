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
  const {
    editorComponentList,
    dispatchClearCurrentComponentAction,
    dispatchSetCurrentEditorComponentAction
  } = useEditorStoreModel();

  const mouseComponentInEditor = useMouseEventHook();

  function handleOnMouseDown(e: React.MouseEvent, componentIndex: number) {
    stopPropagation(e);
    mouseComponentInEditor(componentIndex, e);
  }

  function handleOnComponentClick(e: React.MouseEvent, componentIndex: number) {
    stopPropagation(e);
    // 选中当前的组件
    dispatchSetCurrentEditorComponentAction(componentIndex);
  }

  // 点击画布空白区域
  function handleUnComponentAreaClick(e: React.MouseEvent) {
    stopPropagation(e);
    dispatchClearCurrentComponentAction();
  }
  return (
    <div styleName="editor" onMouseDown={handleUnComponentAreaClick}>
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
                handleOnComponentClick(e, componentIndex);
              }}
            >
              {EditComponent.componentInstance && (
                <EditComponent.componentInstance
                  componentKey={EditComponent.componentId}
                  componentStyles={EditComponent.style}
                  componentInnerText={EditComponent.componentInnerText}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Editor;
