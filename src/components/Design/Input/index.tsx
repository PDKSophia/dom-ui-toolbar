import React, { useEffect, useState } from 'react';
import styles from './index.less';
import 'antd/dist/antd.css';
import { Input } from 'antd';

interface IProps {
  value: string;
  type?: string;
}

function DInput({ value }: IProps) {
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    setCurrentValue(value);
  }, []);

  function onChangeValue(e: any) {
    setCurrentValue(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className={styles.textarea}>
      <Input value={currentValue} onChange={onChangeValue} />
    </div>
  );
}

export default DInput;
