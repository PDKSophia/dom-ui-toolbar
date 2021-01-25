/**
 * @desc 物料市场-文本
 */
import React from 'react';
import './index.less';
import * as Types from '@common/types/component';

function Text({ draggable, onDragStart }: Types.IDragProps) {
  return (
    <div styleName="text" draggable={draggable} onDragStart={onDragStart}>
      文本区域
    </div>
  );
}

export default Text;
