/**
 * @desc Layout 内容模块
 */
import React from 'react';
import styles from './index.less';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import Textarea from '@components/Design/Textarea';

class Content extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Title text="信息" />
        <div className={styles.box}>
          <Label label="内容" />
          <Textarea value="艾宾斯浩遗忘曲线告诉我们：人类大脑对新事物的遗忘是有规律的。而人们恰恰可以从遗忘曲线中找到记忆规律。科学的周期，将帮助你规律复习，高质量备考。" />
        </div>
      </div>
    );
  }
}

export default Content;
