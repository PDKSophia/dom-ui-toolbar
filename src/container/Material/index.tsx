import React, { useEffect, useState } from 'react';
import styles from './index.less';
import MyScrollBox from '@components/Base/MyScrollBox';
import Text from './Text';
import Button from './Button';
import Cover from './Cover';

interface IProps {
  dom: any;
  onChangeStyle: (newStyle: any) => void;
}
function Material() {
  const height = document.body.clientHeight;
  return (
    <div className={styles.material}>
      <MyScrollBox maxHeight={height}>
        <div className={styles.logo}>物料市场</div>
        <div className={styles.flex}>
          <Button />
          <Text />
          <Cover />
        </div>
      </MyScrollBox>
    </div>
  );
}

export default Material;
