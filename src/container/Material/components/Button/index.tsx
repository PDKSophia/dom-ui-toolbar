/**
 * @desc 物料市场-按钮
 */
import React from 'react';
import './index.less';
import * as Types from '@common/types/component';

function Button({ componentKey, componentStyles, componentInnerText, draggable, onDragStart }: Types.IDragProps) {
  const componentRefs = React.useRef<HTMLDivElement>();

  const getComponentRefs = () => {
    return componentRefs?.current || null;
  };

  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    onDragStart && onDragStart(e, getComponentRefs());
  };

  return (
    <div
      ref={componentRefs}
      key={componentKey}
      style={componentStyles}
      styleName="btn"
      draggable={draggable}
      onDragStart={onDrag}
    >
      {componentInnerText || '基础按钮'}
    </div>
  );
}

export default Button;
