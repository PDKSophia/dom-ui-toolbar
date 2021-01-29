/**
 * @desc Font 字体模块
 */
import React, { ChangeEventHandler } from 'react';
import './index.less';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import Input from '@components/Design/Input';
import NumberInputOperator from '@components/Design/NumberInputOperator';
import Desc from '@components/Toolbar/Desc';
import * as StyleType from '@common/types/domStyle';
import { reducePX, transformStringToNumber } from '@common/utils/getDomStyle';
import { DEFAULT_COLOR } from '@common/constant';

interface IProps {
  styles: StyleType.IDomStyleType;
  onUpdateStyles: (componentStyles: StyleType.IDomStyleType) => void;
}

function Font({ styles, onUpdateStyles }: IProps) {
  function onPickFontColor(color: any) {
    onUpdateStyles({
      ...styles,
      color: color
    });
  }

  const onFontColorBlur: ChangeEventHandler = e => {
    const color = (e.target as HTMLInputElement).value;
    const changeColor = color === '#' ? DEFAULT_COLOR : !color ? DEFAULT_COLOR : color;
    onUpdateStyles({
      ...styles,
      color: changeColor
    });
  };

  return (
    <div styleName="font">
      <Title text="文字" />
      <div styleName="box">
        <Label label="大小(px)" />
        <div styleName="wrapper">
          <NumberInputOperator
            defaultNum={styles ? transformStringToNumber(reducePX(styles.fontSize)) : 0}
            minNum={0}
            maxNum={1000}
            onNumberChang={(num: number) => {
              onUpdateStyles({
                ...styles,
                fontSize: `${num}px`
              });
            }}
          />
        </div>
      </div>
      <div styleName="box">
        <Label label="空间(px)" />
        <div styleName="wrapper">
          <NumberInputOperator
            defaultNum={styles ? transformStringToNumber(reducePX(styles.letterSpacing)) : 0}
            minNum={0}
            maxNum={1000}
            onNumberChang={(num: number) => {
              onUpdateStyles({
                ...styles,
                letterSpacing: `${num}px`
              });
            }}
          />
          <NumberInputOperator
            defaultNum={styles ? transformStringToNumber(reducePX(styles.lineHeight)) : 0}
            minNum={1}
            maxNum={999}
            onNumberChang={(num: number) => {
              onUpdateStyles({
                ...styles,
                lineHeight: `${num}px`
              });
            }}
          />
        </div>
        <div styleName="desc">
          <Desc desc={['字间距', '行间距']} />
        </div>
      </div>
      <div styleName="box">
        <Label label="颜色" />
        <div styleName="wrapper">
          <Input value={styles ? styles.color : DEFAULT_COLOR} onChange={onPickFontColor} onBlur={onFontColorBlur} />
          <div styleName="colorFill">
            <Input
              type="color"
              value={styles ? styles.color : DEFAULT_COLOR}
              onChange={onPickFontColor}
              iClassName="color-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Font;
