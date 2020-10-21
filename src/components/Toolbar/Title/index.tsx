import React from 'react';
import styles from './index.less';

interface IProps {
  text: string;
}
function Title({ text }: IProps) {
  return <h3 className={styles.title}>{text}</h3>;
}

export default Title;
