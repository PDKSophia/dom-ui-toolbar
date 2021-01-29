import React, { useEffect, ChangeEventHandler } from 'react';
import styles from './index.less';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import classnames from 'classnames/bind';
let cx = classnames.bind(styles);

interface IProps {
  value: string;
  type?: string;
  defaultValue?: string;
  iClassName?: string;
  onBlur?: (value: any) => void;
  onChange?: (value: any) => void;
}

function DInput({ defaultValue, value, type, iClassName, onBlur, onChange }: IProps) {
  const onChangeValue: ChangeEventHandler = e => {
    onChange && onChange((e.target as HTMLInputElement).value);
  };

  return (
    <div className={cx('my-input', iClassName)}>
      <Input defaultValue={defaultValue} type={type} value={value} onChange={onChangeValue} onBlur={onBlur} />
    </div>
  );
}

export default DInput;
