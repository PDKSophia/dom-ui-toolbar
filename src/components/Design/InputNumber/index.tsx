import React, { ChangeEventHandler } from 'react';
import styles from './index.less';
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';
import classnames from 'classnames/bind';
let cx = classnames.bind(styles);

interface IProps {
  value: number;
  minNum?: number;
  maxNum?: number;
  iClassName?: string;
  onBlur?: (value: number) => void;
  onChange?: (value: number) => void;
  formatter?: (valueNum: number | string) => string;
  parser?: (valueStr: string) => number;
}

function DInputNumber({ value, minNum = 0, maxNum = 100, iClassName, onBlur, onChange, formatter, parser }: IProps) {
  const defaultFormatter = (value: number | string) => {
    return `${value}%`;
  };
  const defaultParser = (value: string) => {
    return value.replace('%', '');
  };

  const onInputChange = (value: any) => {
    let valueStr: string = String(value);
    let _value: any = formatter ? parser(valueStr) : defaultParser(valueStr);
    onChange && onChange(_value);
  };
  const onInputBlur: ChangeEventHandler = e => {
    let value: any = (e.target as HTMLInputElement).value;
    value = formatter ? parser(value) : defaultParser(value);
    onBlur && onBlur(value);
  };

  return (
    <div className={cx('my-input', iClassName)}>
      <InputNumber
        min={minNum}
        max={maxNum}
        value={value}
        onBlur={onInputBlur}
        onChange={onInputChange}
        formatter={formatter || defaultFormatter}
        parser={parser || defaultParser}
      />
    </div>
  );
}

export default DInputNumber;
