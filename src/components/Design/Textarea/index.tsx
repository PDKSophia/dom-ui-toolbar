import React, { useState } from 'react';
import styles from './index.less';

function Textarea() {
  const [currentValue, setCurrentValue] = useState('');

  function onChangeValue(e: any) {
    setCurrentValue(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className={styles.textarea}>
      <textarea value={currentValue} onChange={onChangeValue} maxLength={300} />
    </div>
  );
}

export default Textarea;
