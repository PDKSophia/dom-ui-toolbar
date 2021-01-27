/**
 * @description 画布数据
 */
import { cloneDeep } from 'lodash';
import { useState } from 'react';
import _ from 'sugar-hox-devtools';
import { createUUid } from '@common/utils';
import * as Types from '@common/types/component';
import * as ComponentsList from '@container/Material/components';

function useEditorStoreModel() {
  const [currentComponent, setCurrentComponent] = useState<Types.IStoreComponentProps>(); // 画布当前选中的组件
  const [editorComponentList, setEditorComponentList] = useState<Types.IStoreComponentProps[]>([]); // 画布中的组件列表

  /**
   * 一系列 action 相关操作
   */
  /**
   * 添加一个组件
   * @param componentName 组件名
   * @param componentStyles 组件自定义样式
   */
  const dispatchAddComponentAction = (componentName: string, componentStyles?: React.CSSProperties) => {
    const componentInstance = ComponentsList[componentName];
    let prevStore = cloneDeep(editorComponentList);
    prevStore.push({
      componentId: createUUid(),
      componentInstance,
      style: {
        ...componentStyles,
        zIndex: prevStore.length
      }
    });
    setEditorComponentList(prevStore);
  };

  return {
    editorComponentList,
    dispatchAddComponentAction
  };
}

useEditorStoreModel.namespace = 'useEditorStoreModel';

export default _.createModel(useEditorStoreModel);
