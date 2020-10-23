/**
 * @desc Layout 区域模块
 */
import React from 'react';
import styles from './index.less';
import Desc from '@components/Toolbar/Desc';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import NumberInputOperator from '@components/Design/NumberInputOperator';

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Title text="布局" />
        <div className={styles.box}>
          <Label label="大小(px)" />
          <div className={styles.wrapper}>
            <NumberInputOperator
              defaultNum={284}
              minNum={0}
              maxNum={1000}
              onNumberChang={(num: number) => {
                console.log(num);
              }}
            />
            <NumberInputOperator
              defaultNum={500}
              minNum={1}
              maxNum={999}
              onNumberChang={(num: number) => {
                console.log(num);
              }}
            />
          </div>
          <div className={styles.desc}>
            <Desc desc={['宽度', '高度']} />
          </div>
        </div>
        <div className={styles.box}>
          <Label label="圆角(px)" />
          <div className={styles.wrapper}>
            <NumberInputOperator
              defaultNum={4}
              minNum={0}
              maxNum={1000}
              onNumberChang={(num: number) => {
                console.log(num);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
