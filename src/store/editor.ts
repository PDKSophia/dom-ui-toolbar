/**
 * @description 画布数据
 */
import { cloneDeep } from 'lodash';
import { useState } from 'react';
import _ from 'sugar-hox-devtools';
import { createUUid } from '@common/utils';
import * as ComponentType from '@common/types/component';
import * as ComponentsList from '@container/Material/components';

function useEditorStoreModel() {
  const [currentEditorComponentIndex, setCurrentEditorComponentIndex] = useState<number>(-1); // 画布当前选中的组件下标
  const [currentEditorComponent, setCurrentEditorComponent] = useState<ComponentType.IStoreComponentProps>(); // 画布当前选中的组件
  const [editorComponentList, setEditorComponentList] = useState<ComponentType.IStoreComponentProps[]>([]); // 画布中的组件列表

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
      style: componentStyles
    });
    setEditorComponentList(prevStore);
  };
  /**
   * 清空画布，清除所有组件
   */
  const dispatchClearTotalComponentAction = () => setEditorComponentList([]);
  /**
   * 释放当前选中的组件
   */
  const dispatchClearCurrentComponentAction = () => {
    setCurrentEditorComponentIndex(-1);
    setCurrentEditorComponent(null);
  };
  /**
   * 画布内移动组件，动态修改坐标位置
   */
  const dispatchUpdateComponentPositionAction = (componentIndex: number, componentStyles?: React.CSSProperties) => {
    const prevStore = cloneDeep(editorComponentList);
    const moveComponent = { ...prevStore[componentIndex], style: { ...componentStyles } };
    prevStore[componentIndex] = moveComponent;
    setEditorComponentList(prevStore);
  };
  /**
   * 选中当前组件，记录当前组件
   */
  const dispatchSetCurrentEditorComponentAction = (componentIndex: number) => {
    setCurrentEditorComponentIndex(componentIndex);
    setCurrentEditorComponent(editorComponentList[componentIndex]);
  };
  /**
   * 更新组件样式
   * @param componentStyles 新样式
   */
  const dispatchUpdateComponentStylesAction = (componentStyles: React.CSSProperties) => {
    const nextStore = cloneDeep(editorComponentList);
    const updateComponent = { ...nextStore[currentEditorComponentIndex], style: { ...componentStyles } };
    nextStore[currentEditorComponentIndex] = updateComponent;
    setEditorComponentList(nextStore);
    setCurrentEditorComponent(updateComponent);
  };
  return {
    editorComponentList,
    currentEditorComponentIndex,
    currentEditorComponent,
    dispatchAddComponentAction,
    dispatchClearTotalComponentAction,
    dispatchClearCurrentComponentAction,
    dispatchUpdateComponentPositionAction,
    dispatchSetCurrentEditorComponentAction,
    dispatchUpdateComponentStylesAction
  };
}

useEditorStoreModel.namespace = 'useEditorStoreModel';

export default _.createModel(useEditorStoreModel);
