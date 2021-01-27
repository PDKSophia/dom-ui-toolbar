/**
 * @description 画布-编辑区域
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import * as Types from '@common/types/component';
import useEditorStoreModel from '@store/editor';
import useDragEventHooks from '@hooks/useDragEventHook';

function Editor() {
  const { editorComponentList } = useEditorStoreModel();
  const drag = useDragEventHooks();

  function handleOnMouseDown(e: React.MouseEvent, componentIndex: number) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (e.preventDefault) {
      e.preventDefault();
    } else {
      window.event.returnValue == false;
    }
    drag(componentIndex, e);
  }
  return (
    <div styleName="editor">
      {editorComponentList.length > 0 &&
        editorComponentList.map((EditComponent: Types.IStoreComponentProps, componentIndex: number) => {
          return (
            <div
              styleName="wrapper-component"
              key={EditComponent.componentId}
              style={EditComponent.style}
              onMouseDown={(e: React.MouseEvent) => {
                handleOnMouseDown(e, componentIndex);
              }}
            >
              <EditComponent.componentInstance key={EditComponent.componentId} />
            </div>
          );
        })}
    </div>
  );
}

export default Editor;
