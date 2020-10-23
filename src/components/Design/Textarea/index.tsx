import React, { useEffect, useState } from 'react';
import styles from './index.less';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import classnames from 'classnames/bind';
let cx = classnames.bind(styles);

interface IProps {
  value: string;
  iClassName?: string;
}

function Textarea({ value, iClassName }: IProps) {
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    setCurrentValue(value);
  }, []);

  function onChangeValue(e: any) {
    setCurrentValue(e.target.value);
    console.log(e.target.value);
  }

  console.log(iClassName);
  return (
    <div className={cx('textarea', iClassName)}>
      <Input.TextArea autoSize value={currentValue} onChange={onChangeValue} />
    </div>
  );
}

export default Textarea;
