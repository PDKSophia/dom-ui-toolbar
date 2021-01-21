import React from 'react';
import './index.less';
import MyScrollBox from '@components/Base/MyScrollBox';
import Text from './Text';
import Button from './Button';
import Cover from './Cover';

function Material() {
  const height = document.body.clientHeight;
  return (
    <div styleName="material">
      <MyScrollBox maxHeight={height}>
        <div styleName="logo">物料市场</div>
        <div styleName="flex">
          <Button />
          <Text />
          <Cover />
        </div>
      </MyScrollBox>
    </div>
  );
}

export default Material;
