/**
 * @description 画布-编辑区域
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import * as Types from '@common/types/component';
import useEditorStoreModel from '@store/editor';

function Editor() {
  const { editorComponentList } = useEditorStoreModel();
  return (
    <div styleName="editor">
      {editorComponentList.length > 0 &&
        editorComponentList.map((EditComponent: Types.IStoreComponentProps, index: number) => {
          return (
            <div styleName="wrapper-component" key={EditComponent.componentId} style={EditComponent.style}>
              <EditComponent.componentInstance key={EditComponent.componentId} />
            </div>
          );
        })}
    </div>
  );
}

export default Editor;
