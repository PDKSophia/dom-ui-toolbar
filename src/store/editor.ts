/**
 * @description 画布数据
 */
import { cloneDeep } from 'lodash';
import { useState } from 'react';
import _ from 'sugar-hox-devtools';
import * as ComponentsList from '@container/Material/components';

function useEditorStoreModel() {
  const [currentComponent, setCurrentComponent] = useState<any>(); // 画布当前选中的组件
  const [editorComponentList, setEditorComponentList] = useState<any[]>([]); // 画布中的组件列表

  /**
   * 一系列 action 相关操作
   */
  // 添加一个组件
  const dispatchAddComponentAction = (componentName: string) => {
    const componentInstance = ComponentsList[componentName];
    let prevStore = cloneDeep(editorComponentList);
    prevStore.push(componentInstance);
    setEditorComponentList(prevStore);
  };

  return {
    editorComponentList,
    dispatchAddComponentAction
  };
}

export default _.createModel(useEditorStoreModel);
