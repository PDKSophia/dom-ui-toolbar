import React from 'react';
import styles from './index.less';

interface IProps {
  label: string;
}
function Label({ label }: IProps) {
  return <span className={styles.text}>{label}</span>;
}

export default Label;
