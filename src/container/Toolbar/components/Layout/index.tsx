/**
 * @desc Layout 区域模块
 */
import React from 'react';
import './index.less';
import Desc from '@components/Toolbar/Desc';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import NumberInputOperator from '@components/Design/NumberInputOperator';
import { reducePX, transformStringToNumber } from '@common/utils/dom';
import { IToolbarLayoutProps } from '@common/types/component';

interface IProps {
  styles: IToolbarLayoutProps;
  onUpdateStyles: (componentStyles: IToolbarLayoutProps) => void;
}

function Layout({ styles, onUpdateStyles }: IProps) {
  return (
    <div styleName="layout">
      <Title text="布局" />
      <div styleName="box">
        <Label label="大小(px)" />
        <div styleName="wrapper">
          <NumberInputOperator
            defaultNum={styles ? transformStringToNumber(reducePX(styles.width)) : 0}
            minNum={0}
            maxNum={1000}
            onNumberChang={(num: number) => {
              onUpdateStyles({
                ...styles,
                width: `${num}px`
              });
            }}
          />
          <NumberInputOperator
            defaultNum={styles ? transformStringToNumber(reducePX(styles.height)) : 0}
            minNum={1}
            maxNum={999}
            onNumberChang={(num: number) => {
              onUpdateStyles({
                ...styles,
                height: `${num}px`
              });
            }}
          />
        </div>
        <div styleName="desc">
          <Desc desc={['宽度', '高度']} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
