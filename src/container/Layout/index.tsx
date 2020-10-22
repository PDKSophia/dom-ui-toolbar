/**
 * @desc Layout 区域模块
 */
import React from 'react';
import styles from './index.less';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import Textarea from '@components/Design/Textarea';

class Toolbar extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Title text="布局" />
        <div className={styles.box}>
          <Label label="内容" />
          <Textarea />
        </div>
      </div>
    );
  }
}

export default Toolbar;
