import React from 'react';
import './index.less';

interface IScrollBoxProps {
  children: any;
  maxHeight?: number;
  style?: React.CSSProperties;
}
function MyScrollBox({ children, maxHeight = 500, style = null }: IScrollBoxProps) {
  let _style = {};
  if (style) {
    _style = { ...style };
  }
  if (maxHeight) {
    _style = { ..._style, maxHeight: `${maxHeight}px` };
  }
  return (
    <div styleName="MyScrollBox_outer" style={_style}>
      <div styleName="MyScrollBox_hidden_scroll" style={{ maxHeight: `${maxHeight}px` }}>
        <div styleName="MyScrollBox_inner">{children}</div>
      </div>
    </div>
  );
}

export default MyScrollBox;
