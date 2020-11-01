import React from 'react';
import styles from './index.less';
import { Switch } from 'antd';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.view} onClick={() => {}}>
        开启全屏
        <Switch size="small" checked={true} className={styles.switch} />
      </div>
    </div>
  );
}

export default Header;
