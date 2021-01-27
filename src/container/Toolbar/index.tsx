import React, { useEffect, useState } from 'react';
import './index.less';
import { getDomStyles } from '@common/utils';
import Fill from './components/Fill';
import Font from './components/Font';
import Code from './components/Code';
import Layout from './components/Layout';
import Content from './components/Content';
import MyScrollBox from '@components/Base/MyScrollBox';

interface IProps {
  dom: any;
  onChangeStyle: (newStyle: any) => void;
}
function Toolbar({ dom, onChangeStyle }: IProps) {
  const [fillRectStyle, setFillRectStyle] = useState(null);
  const [fontRectStyle, setFontRectStyle] = useState(null);
  const [layoutRectStyle, setLayoutRectStyle] = useState(null);
  const [contentRectStyle, setContentRectStyle] = useState(null);

  useEffect(() => {
    if (dom) {
      // const fillModelStyles = getDomStyles(dom, FillModel);
      // setFillRectStyle(fillModelStyles);
      // const fontModelStyles = getDomStyles(dom, FontModel);
      // setFontRectStyle(fontModelStyles);
      // const layoutModelStyles = getDomStyles(dom, LayoutModel);
      // setLayoutRectStyle(layoutModelStyles);
    }
  }, [dom]);

  const height = document.body.clientHeight;
  return (
    <div styleName="toolbar">
      <MyScrollBox maxHeight={height}>
        <Layout style={layoutRectStyle} onChangeStyle={onChangeStyle} />
        <Fill />
        <Font />
        <Content />
        <Code />
      </MyScrollBox>
    </div>
  );
}

export default Toolbar;
