/**
 * @desc 答题卡批量添加-选项个数
 * @author {pengdaokuan}
 */
import React, { useState, useEffect } from 'react';
import styles from './index.less';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

interface NumberInputOperatorProps {
  defaultNum?: number;
  minNum?: number;
  maxNum?: number;
  onNumberChang?: (num: number) => void;
  styles?: React.CSSProperties;
}

/**
 * @extends {React.hooks}
 * @property {Number} defaultNum - 当前输入框数量值
 * @property {Number} minNum - 最小值
 * @property {Number} maxNum - 最大值
 * @property {Function} onInputNum - 修改value事件
 * @property {Function} onMinusNum - 执行减法事件
 * @property {Function} onPlusNum - 执行加法事件
 * @property {Function} onBlur - 失去input焦点时触发事件
 * @property {React.CSSProperties} styles - 样式
 */
function NumberInputOperator({ defaultNum, minNum, maxNum, onNumberChang, styles }: NumberInputOperatorProps) {
  const [num, setNum] = useState(defaultNum || 0);
  const handleKeyPress = (e: any) => {
    const invalidChars = ['-', '+', 'e', '.', 'E'];
    if (invalidChars.indexOf(e.key) !== -1) {
      e.preventDefault();
    }
  };

  const minClassName = cx({
    btn: true,
    left: true,
    'svg-icon': true
  });

  const plusClassName = cx({
    btn: true,
    right: true,
    'svg-icon': true
  });

  const onMinusNum = () => {
    if (num > minNum) {
      setNum(num => num - 1);
    }
  };

  const onPlusNum = () => {
    if (num < maxNum) {
      setNum(num => num + 1);
    }
  };

  const onChangeInputNum = (e: any) => {
    const num = parseInt(e.target.value, 10);
    e.target.value = '';
    setNum(num > maxNum ? maxNum : num);
  };

  const onInputBlur = (e: any) => {
    const num = e.target.value === '' ? 0 : parseInt(e.target.value, 10);
    let result = num;
    if (typeof num === 'number') {
      if (num < minNum) {
        result = minNum;
      }
      if (num > maxNum) {
        result = maxNum;
      }
    }
    setNum(result);
  };

  // number 发生变化时通知外部
  useEffect(() => {
    onNumberChang && onNumberChang(num || 0);
  }, [num]);
  return (
    <div className={cx('operator')} style={styles ? styles : {}}>
      <div className={minClassName} onClick={onMinusNum}>
        -
      </div>
      <input
        value={num}
        type="number"
        className={cx('input')}
        max="99"
        onBlur={onInputBlur}
        onChange={onChangeInputNum}
        onKeyPress={handleKeyPress}
        disabled={maxNum === 0}
      />
      <div className={plusClassName} onClick={onPlusNum}>
        +
      </div>
    </div>
  );
}

export default NumberInputOperator;
