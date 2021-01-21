/**
 * @desc Layout 内容模块
 */
import React from 'react';
import styles from './index.less';
import Title from '@components/Toolbar/Title';
import Textarea from '@components/Design/Textarea';

function Code() {
  return (
    <div className={styles.code}>
      <Title text="代码" />
      <div className={styles.block}>
        <p className={styles.property}>
          <span className={styles.key}>width</span>
          <span className={styles.line}>: </span>
          <span className={styles.value}>294px</span>
          <span className={styles.line}>;</span>
        </p>
        <p className={styles.property}>
          <span className={styles.key}>height</span>
          <span className={styles.line}>: </span>
          <span className={styles.value}>96px</span>
          <span className={styles.line}>;</span>
        </p>
        <p className={styles.property}>
          <span className={styles.key}>font-size</span>
          <span className={styles.line}>: </span>
          <span className={styles.value}>12px</span>
          <span className={styles.line}>;</span>
        </p>
        <p className={styles.property}>
          <span className={styles.key}>font-weight</span>
          <span className={styles.line}>: </span>0<span className={styles.value}>400</span>
          <span className={styles.line}>;</span>
        </p>
        <p className={styles.property}>
          <span className={styles.key}>color</span>
          <span className={styles.line}>: </span>
          <span className={styles.value}>#000000</span>
          <span className={styles.line}>;</span>
        </p>
      </div>
    </div>
  );
}

export default Code;
