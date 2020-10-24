import React, { useEffect, useState } from 'react';
import styles from './index.less';
import Layout from '../Layout';
import Content from '../Content';
import Fill from '../Fill';
import Font from '../Font';
import Code from '../Code';
import MyScrollBox from '@components/Toolbar/MyScrollBox';
import { getDomStyles } from '@common/utils';

// 引入数据模型
import FillModel from '@model/fill.model';
import FontModel from '@model/font.model';
import LayoutModel from '@model/layout.model';

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
      const fillModelStyles = getDomStyles(dom, FillModel);
      setFillRectStyle(fillModelStyles);
      const fontModelStyles = getDomStyles(dom, FontModel);
      setFontRectStyle(fontModelStyles);
      const layoutModelStyles = getDomStyles(dom, LayoutModel);
      setLayoutRectStyle(layoutModelStyles);
    }
  }, [dom]);

  const height = document.body.clientHeight;
  return (
    <div className={styles.toolbar}>
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
