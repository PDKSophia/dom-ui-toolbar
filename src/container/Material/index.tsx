import React, { useEffect, useState } from 'react';
import './index.less';
import * as ComponentsList from './components';
import MyScrollBox from '@components/Base/MyScrollBox';

function Material() {
  const height = document.body.clientHeight;
  const [currentComponent, setCurrentComponent] = useState();

  return (
    <div styleName="material">
      <MyScrollBox maxHeight={height}>
        <div styleName="logo">物料市场</div>
        <div styleName="flex">
          {Object.keys(ComponentsList).map((componentName: string, index: number) => {
            const RenderComponent = ComponentsList[componentName];
            return (
              <RenderComponent
                key={index}
                draggable={true}
                onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
                  console.log(e.currentTarget);
                  e.dataTransfer.setData('Button', '111');
                  console.log('拖');
                }}
              />
            );
          })}
        </div>
      </MyScrollBox>
    </div>
  );
}

export default Material;
