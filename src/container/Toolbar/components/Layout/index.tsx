/**
 * @desc Layout 区域模块
 */
import React, { useEffect } from 'react';
import './index.less';
import Desc from '@components/Toolbar/Desc';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import NumberInputOperator from '@components/Design/NumberInputOperator';
import { transformValue } from '@common/utils/model';

function Layout({ style, onChangeStyle }) {
  useEffect(() => {
    console.log(style);
  }, [style]);

  return (
    <div styleName="layout">
      <Title text="布局" />
      <div styleName="box">
        <Label label="大小(px)" />
        <div styleName="wrapper">
          <NumberInputOperator
            defaultNum={style ? transformValue(style.width) : 0}
            minNum={0}
            maxNum={1000}
            onNumberChang={(num: number) => {
              onChangeStyle({
                ...style,
                width: `${num}px`
              });
            }}
          />
          <NumberInputOperator defaultNum={500} minNum={1} maxNum={999} onNumberChang={(num: number) => {}} />
        </div>
        <div styleName="desc">
          <Desc desc={['宽度', '高度']} />
        </div>
      </div>
      <div styleName="box">
        <Label label="圆角(px)" />
        <div styleName="wrapper">
          <NumberInputOperator defaultNum={4} minNum={0} maxNum={1000} onNumberChang={(num: number) => {}} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
