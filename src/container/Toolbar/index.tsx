import React, { useMemo } from 'react';
import './index.less';
import Fill from './components/Fill';
import Font from './components/Font';
import Code from './components/Code';
import Layout from './components/Layout';
import Content from './components/Content';
import MyScrollBox from '@components/Base/MyScrollBox';
import useEditorStoreModel from '@store/editor';
import * as StyleType from '@common/types/domStyle';

/**
 * 组件工具条入口文件，决定通过Props方式给各组件进行通信，从而修改style
 * 不通过各组件直接连store去修改style，原因在于：跟业务不要太耦合
 * 每个组件只需要传style和onChangeStyle，在入口文件统一做修改store操作
 */
function Toolbar() {
  const { currentEditorComponent, dispatchUpdateComponentStylesAction } = useEditorStoreModel();

  const onUpdateStyles = (componentStyles: StyleType.IDomStyleType) => {
    if (currentEditorComponent) {
      dispatchUpdateComponentStylesAction(componentStyles);
    }
  };

  const height = document.body.clientHeight;

  const ToolbarMemo = useMemo(() => {
    return (
      <MyScrollBox maxHeight={height}>
        <Layout styles={currentEditorComponent?.style || {}} onUpdateStyles={onUpdateStyles} />
        <Fill styles={currentEditorComponent?.style || {}} onUpdateStyles={onUpdateStyles} />
        <Font styles={currentEditorComponent?.style || {}} onUpdateStyles={onUpdateStyles} />
        <Content />
        <Code />
      </MyScrollBox>
    );
  }, [currentEditorComponent]);

  return <div styleName="toolbar">{ToolbarMemo}</div>;
}

export default Toolbar;
