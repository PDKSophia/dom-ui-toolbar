import React, { useEffect, useState } from 'react';
import styles from './index.less';
import MyScrollBox from '@components/Base/MyScrollBox';

interface IProps {
  dom: any;
  onChangeStyle: (newStyle: any) => void;
}
function Material() {
  const height = document.body.clientHeight;
  return (
    <div className={styles.material}>
      <MyScrollBox maxHeight={height}>
        <div>物料市场</div>
      </MyScrollBox>
    </div>
  );
}

export default Material;
