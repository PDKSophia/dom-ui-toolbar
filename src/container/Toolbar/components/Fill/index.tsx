/**
 * @desc Fill 填充模块
 */
import React, { useState, ChangeEventHandler } from 'react';
import styles from './index.less';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import Input from '@components/Design/Input';
import InputNumber from '@components/Design/InputNumber';
import NumberInputOperator from '@components/Design/NumberInputOperator';

function Fill() {
  const [currentColor, setCurrentColor] = useState('#000000');
  const [currentOpacity, setCurrentOpacity] = useState(30);

  function onPickColor(color: any) {
    setCurrentColor(color);
  }

  const onColorBlur: ChangeEventHandler = e => {
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
    <div className={styles.fill}>
      <Title text="填充" />
      <div className={styles.box}>
        <Label label="透明度" />
        <InputNumber minNum={0} maxNum={100} value={currentOpacity} onBlur={onBlurOpacity} onChange={onChangeOpacity} />
      </div>
      <div className={styles.box}>
        <Label label="背景色" />
        <div className={styles.wrapper}>
          <Input value={currentColor} onChange={onPickColor} onBlur={onColorBlur} />
          <div className={styles.colorFill}>
            <Input type="color" value={currentColor} onChange={onPickColor} iClassName={styles.myTest} />
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <Label label="边框(px)" />
        <div className={styles.wrapper}>
          <NumberInputOperator defaultNum={4} minNum={0} maxNum={1000} onNumberChang={(num: number) => {}} />
          <NumberInputOperator defaultNum={4} minNum={0} maxNum={1000} onNumberChang={(num: number) => {}} />
        </div>
      </div>
      <div className={styles.box}>
        <Label label="边框颜色" />
        <div className={styles.wrapper}>
          <Input value={currentColor} onChange={onPickColor} onBlur={onColorBlur} />
          <div className={styles.colorFill}>
            <Input type="color" value={currentColor} onChange={onPickColor} iClassName={styles.myTest} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Fill;
