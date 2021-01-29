/**
 * @desc 物料市场-文本
 */
import React from 'react';
import './index.less';
import * as Types from '@common/types/component';

function Text({ componentKey, componentStyles, draggable, onDragStart }: Types.IDragProps) {
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
      styleName="text"
      draggable={draggable}
      onDragStart={onDrag}
    >
      文本区域
    </div>
  );
}

export default Text;
