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
   * @param componentInnerText 组件文本内容
   * @param componentStyles 组件自定义样式
   */
  const dispatchAddComponentAction = (
    componentName: string,
    componentInnerText?: string,
    componentStyles?: React.CSSProperties
  ) => {
    const componentInstance = ComponentsList[componentName];
    let nextStore = cloneDeep(editorComponentList);
    nextStore.push({
      componentId: createUUid(),
      componentName,
      componentInstance,
      componentInnerText,
      style: componentStyles
    });
    setEditorComponentList(nextStore);
  };
  /**
   * 清空画布，清除所有组件
   */
  const dispatchClearTotalComponentAction = () => setEditorComponentList([]);
  /**
   * 画布内移动组件，动态修改坐标位置
   */
  const dispatchUpdateComponentPositionAction = (componentIndex: number, componentStyles?: React.CSSProperties) => {
    const nextStore = cloneDeep(editorComponentList);
    const moveComponent = { ...nextStore[componentIndex], style: { ...componentStyles } };
    nextStore[componentIndex] = moveComponent;
    setEditorComponentList(nextStore);
  };
  /**
   * 选中当前组件，记录当前组件
   */
  const dispatchSetCurrentEditorComponentAction = (componentIndex: number) => {
    setCurrentEditorComponentIndex(componentIndex);
    setCurrentEditorComponent(editorComponentList[componentIndex]);
  };
  /**
   * 从数组中删除组件
   */
  const dispatchDeleteComponentAction = (componentIndex: number) => {
    let nextStore = cloneDeep(editorComponentList);
    nextStore.splice(componentIndex, 1);
    setEditorComponentList(nextStore);
  };
  /**
   * 点击空白区域，释放当前组件
   */
  const dispatchClearCurrentComponentAction = () => {
    setCurrentEditorComponentIndex(-1);
    setCurrentEditorComponent(null);
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
  /**
   * 修改组件内容
   */
  const dispatchUpdateComponentInnerTextAction = (innerText: string) => {
    const nextStore = cloneDeep(editorComponentList);
    const updateComponent = { ...nextStore[currentEditorComponentIndex], componentInnerText: innerText };
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
    dispatchDeleteComponentAction,
    dispatchClearCurrentComponentAction,
    dispatchUpdateComponentPositionAction,
    dispatchSetCurrentEditorComponentAction,
    dispatchUpdateComponentStylesAction,
    dispatchUpdateComponentInnerTextAction
  };
}

useEditorStoreModel.namespace = 'useEditorStoreModel';

export default _.createModel(useEditorStoreModel);
