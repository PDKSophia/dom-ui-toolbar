/**
 * @desc 物料市场-封面图
 */
import React from 'react';
import './index.less';
import * as Types from '@common/types/component';

const demoUrl =
  'https://7375-sugar-trubos-m10bz-1303006902.tcb.qcloud.la/trubos/%E7%AC%AC%E4%B8%80%E5%B1%8A%E5%9C%9F%E6%8B%A8%E9%BC%A0%E5%A4%A7%E4%BC%9A.png?sign=405ed7836a91fa5677bd1416ca7be0b0&t=1604213676';

function Cover({ componentKey, componentStyles, draggable, componentInnerText, onDragStart }: Types.IDragProps) {
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
      styleName="cover"
      title=""
      draggable={draggable}
      onDragStart={onDrag}
    >
      <img src={demoUrl} />
    </div>
  );
}

export default Cover;
