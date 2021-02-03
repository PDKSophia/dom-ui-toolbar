/**
 * @desc Fill 填充模块
 */
import React, { ChangeEventHandler } from 'react';
import './index.less';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import Input from '@components/Design/Input';
import NumberInputOperator from '@components/Design/NumberInputOperator';
import { reducePX, transformStringToNumber } from '@common/utils/getDomStyle';
import { DEFAULT_COLOR } from '@common/constant';

interface IProps {
  styles: React.CSSProperties;
  onUpdateStyles: (componentStyles: React.CSSProperties) => void;
}

function Fill({ styles, onUpdateStyles }: IProps) {
  function onPickBackgroundColor(color: any) {
    onUpdateStyles({
      ...styles,
      backgroundColor: color
    });
  }

  const onBackgroundColorBlur: ChangeEventHandler = e => {
    const color = (e.target as HTMLInputElement).value;
    const changeColor = color === '#' ? DEFAULT_COLOR : !color ? DEFAULT_COLOR : color;
    onUpdateStyles({
      ...styles,
      backgroundColor: changeColor
    });
  };

  function onPickBorderColor(color: any) {
    onUpdateStyles({
      ...styles,
      borderColor: color
    });
  }

  const onBorderColorBlur: ChangeEventHandler = e => {
    const color = (e.target as HTMLInputElement).value;
    const changeColor = color === '#' ? DEFAULT_COLOR : !color ? DEFAULT_COLOR : color;
    onUpdateStyles({
      ...styles,
      borderColor: changeColor
    });
  };

  return (
    <div styleName="fill">
      <Title text="填充" />
      <div styleName="box">
        <Label label="背景色" />
        <div styleName="wrapper">
          <Input
            defaultValue={DEFAULT_COLOR}
            value={styles ? styles.backgroundColor : DEFAULT_COLOR}
            onChange={onPickBackgroundColor}
            onBlur={onBackgroundColorBlur}
          />
          <div styleName="colorFill">
            <Input
              type="color"
              defaultValue={DEFAULT_COLOR}
              value={styles ? styles.backgroundColor : DEFAULT_COLOR}
              onChange={onPickBackgroundColor}
              iClassName="color-input"
            />
          </div>
        </div>
      </div>
      <div styleName="box">
        <Label label="边框(px)" />
        <div styleName="wrapper">
          <NumberInputOperator
            defaultNum={styles ? transformStringToNumber(reducePX(styles.borderWidth)) : 0}
            minNum={0}
            maxNum={1000}
            onNumberChang={(num: number) => {
              onUpdateStyles({
                ...styles,
                borderWidth: `${num}px`
              });
            }}
          />
        </div>
      </div>
      <div styleName="box">
        <Label label="边框颜色" />
        <div styleName="wrapper">
          <Input
            defaultValue={DEFAULT_COLOR}
            value={styles ? styles.borderColor : DEFAULT_COLOR}
            onChange={onPickBorderColor}
            onBlur={onBorderColorBlur}
          />
          <div styleName="colorFill">
            <Input
              type="color"
              defaultValue={DEFAULT_COLOR}
              value={styles ? styles.borderColor : DEFAULT_COLOR}
              onChange={onPickBorderColor}
              iClassName="color-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Fill;
