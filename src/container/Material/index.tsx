import React from 'react';
import './index.less';
import * as ComponentsList from './components';
import MyScrollBox from '@components/Base/MyScrollBox';

function Material() {
  const height = document.body.clientHeight;

  return (
    <div styleName="material">
      <MyScrollBox maxHeight={height}>
        <div styleName="logo">物料市场</div>
        <div styleName="flex">
          {Object.keys(ComponentsList).map((componentName: string, index: number) => {
            const RenderComponent = ComponentsList[componentName];
            return (
              <div styleName="item" key={`${componentName}_${index}`}>
                <RenderComponent
                  key={index}
                  draggable={true}
                  onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
                    e.dataTransfer.setData('ComponentName', componentName);
                  }}
                />
              </div>
            );
          })}
        </div>
      </MyScrollBox>
    </div>
  );
}

export default Material;
