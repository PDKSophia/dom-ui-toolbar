/**
 * @desc 物料市场-按钮
 */
import React from 'react';
import './index.less';
import * as Types from '@common/types/component';

function Button({ draggable, onDragStart }: Types.IDragProps) {
  return (
    <div styleName="btn" draggable={draggable} onDragStart={onDragStart}>
      基础按钮
    </div>
  );
}

export default Button;
