/**
 * @desc Font 字体模块
 */
import React, { useState, ChangeEventHandler } from 'react';
import styles from './index.less';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import Input from '@components/Design/Input';
import NumberInputOperator from '@components/Design/NumberInputOperator';
import Desc from '@components/Toolbar/Desc';
import InputNumber from '@components/Design/InputNumber';

function Font() {
  const [currentColor, setCurrentColor] = useState('#000000');
  const [currentOpacity, setCurrentOpacity] = useState(30);

  function onPickColor(color: any) {
    setCurrentColor(color);
  }

  const onBlur: ChangeEventHandler = e => {
    const color = (e.target as HTMLInputElement).value;
    if (!color) setCurrentColor('#000000');
    if (color === '#') setCurrentColor('#000000');
  };

  function onBlurOpacity(opacity: number) {
    if (!opacity) setCurrentOpacity(30);
  }

  function onChangeOpacity(opacity: number) {
    setCurrentOpacity(opacity);
  }

  return (
    <div className={styles.font}>
      <Title text="文字" />
      <div className={styles.box}>
        <Label label="大小(px)" />
        <div className={styles.wrapper}>
          <NumberInputOperator defaultNum={4} minNum={0} maxNum={1000} onNumberChang={(num: number) => {}} />
        </div>
      </div>
      <div className={styles.box}>
        <Label label="空间(px)" />
        <div className={styles.wrapper}>
          <NumberInputOperator defaultNum={12} minNum={0} maxNum={1000} onNumberChang={(num: number) => {}} />
          <NumberInputOperator defaultNum={24} minNum={1} maxNum={999} onNumberChang={(num: number) => {}} />
        </div>
        <div className={styles.desc}>
          <Desc desc={['字间距', '行间距']} />
        </div>
      </div>
      <div className={styles.box}>
        <Label label="透明度" />
        <InputNumber minNum={0} maxNum={100} value={currentOpacity} onBlur={onBlurOpacity} onChange={onChangeOpacity} />
      </div>
      <div className={styles.box}>
        <Label label="颜色" />
        <div className={styles.wrapper}>
          <Input value={currentColor} onChange={onPickColor} onBlur={onBlur} />
          <div className={styles.colorFill}>
            <Input type="color" value={currentColor} onChange={onPickColor} iClassName={styles.myTest} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Font;
