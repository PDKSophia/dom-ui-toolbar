/**
 * @description 画布数据
 */
import { cloneDeep } from 'lodash';
import { useState } from 'react';
import _ from 'sugar-hox-devtools';
import { createUUid } from '@common/utils';
import * as StyleType from '@common/types/domStyle';
import * as ComponentType from '@common/types/component';
import * as ComponentsList from '@container/Material/components';

function useEditorStoreModel() {
  const [currentComponent, setCurrentComponent] = useState<ComponentType.IStoreComponentProps>(); // 画布当前选中的组件
  const [editorComponentList, setEditorComponentList] = useState<ComponentType.IStoreComponentProps[]>([]); // 画布中的组件列表

  /**
   * 一系列 action 相关操作
   */
  /**
   * 添加一个组件
   * @param componentName 组件名
   * @param componentStyles 组件自定义样式
   */
  const dispatchAddComponentAction = (componentName: string, componentStyles?: StyleType.IDomStyleType) => {
    console.log('####', componentStyles);
    const componentInstance = ComponentsList[componentName];
    let prevStore = cloneDeep(editorComponentList);
    prevStore.push({
      componentId: createUUid(),
      componentInstance,
      style: {
        ...componentStyles,
        cursor: 'default',
        zIndex: prevStore.length
      }
    });
    setEditorComponentList(prevStore);
  };
  /**
   * 清空画布，清除所有组件
   */
  const dispatchClearTotalComponentAction = () => setEditorComponentList([]);
  /**
   * 画布内移动组件，动态修改坐标位置
   */
  const dispatchUpdateComponentPositionAction = (index: number, newStyle: React.CSSProperties) => {
    const store = cloneDeep(editorComponentList);
    const newItem = { ...store[index], style: { ...store[index].style, ...newStyle } };
    store[index] = newItem;
    setEditorComponentList(store);
  };
  return {
    editorComponentList,
    dispatchAddComponentAction,
    dispatchClearTotalComponentAction,
    dispatchUpdateComponentPositionAction
  };
}

useEditorStoreModel.namespace = 'useEditorStoreModel';

export default _.createModel(useEditorStoreModel);
