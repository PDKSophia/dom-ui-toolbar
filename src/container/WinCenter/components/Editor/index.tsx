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
import { omitStyle, pickStyle } from '@common/utils/dom';

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
              style={pickStyle(EditComponent.style, ['left', 'top', 'zIndex', 'cursor'])}
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
                  componentInnerText={EditComponent.componentInnerText}
                  componentStyles={omitStyle(EditComponent.style, ['left', 'top', 'zIndex', 'cursor'])}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Editor;
