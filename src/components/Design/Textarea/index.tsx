import React, { ChangeEventHandler } from 'react';
import styles from './index.less';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import classnames from 'classnames/bind';
let cx = classnames.bind(styles);

interface IProps {
  value: string;
  iClassName?: string;
  defaultValue?: string;
  onBlur?: (value: any) => void;
  onChange?: (value: any) => void;
}

function Textarea({ value, iClassName, defaultValue, onBlur, onChange }: IProps) {
  const onChangeValue: ChangeEventHandler = e => {
    onChange && onChange((e.target as HTMLInputElement).value);
  };

  return (
    <div className={cx('textarea', iClassName)}>
      <Input.TextArea autoSize defaultValue={defaultValue} value={value} onChange={onChangeValue} onBlur={onBlur} />
    </div>
  );
}

export default Textarea;
