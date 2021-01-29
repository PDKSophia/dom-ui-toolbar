import React from 'react';
import './index.less';
import { Empty } from 'antd';

interface EmptyType {
  full?: boolean;
  description?: string;
}

function MyEmpty({ full = false, description }: EmptyType) {
  return (
    <div styleName={`empty ${full ? 'full-screen' : ''}`}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={description} />
    </div>
  );
}

export default MyEmpty;
