/**
 * @desc Layout 区域模块
 */
import React from 'react';
import styles from './index.less';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import Textarea from '@components/Design/Textarea';
import NumberInputOperator from '@components/Design/NumberInputOperator';

class Toolbar extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Title text="布局" />
        <div className={styles.box}>
          <Label label="内容" />
          <Textarea value="内容" />
        </div>
        <div className={styles.box}>
          <Label label="大小(px)" />
          <div className={styles.wrapper}>
            <NumberInputOperator
              defaultNum={3}
              minNum={1}
              maxNum={1000}
              onNumberChang={(num: number) => {
                console.log(num);
              }}
            />
            <NumberInputOperator
              defaultNum={3}
              minNum={1}
              maxNum={1000}
              onNumberChang={(num: number) => {
                console.log(num);
              }}
            />
          </div>
        </div>
        <div className={styles.box}>
          <Label label="内容" />
          <Textarea value="内容" />
        </div>
      </div>
    );
  }
}

export default Toolbar;
