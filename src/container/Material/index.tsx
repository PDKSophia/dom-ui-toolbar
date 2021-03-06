import React from 'react';
import './index.less';
import * as ComponentsList from './components';
import MyScrollBox from '@components/Base/MyScrollBox';
import getDomStyle from '@common/utils/dom';
import { initComponentStyleStore } from '@store/initStore';

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
                  key={`${componentName}_${index}`}
                  draggable={true}
                  onDragStart={(e: React.DragEvent<HTMLDivElement>, componentRefs?: HTMLDivElement) => {
                    e.dataTransfer.setData('componentName', componentName);
                    if (componentRefs) {
                      const componentStore = {
                        ...initComponentStyleStore.Base,
                        ...initComponentStyleStore[componentName]
                      };
                      const styles = getDomStyle(componentRefs, componentStore);
                      e.dataTransfer.setData('componentInnerText', componentRefs.innerText);
                      e.dataTransfer.setData('componentDomStyle', JSON.stringify(styles));
                    }
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
