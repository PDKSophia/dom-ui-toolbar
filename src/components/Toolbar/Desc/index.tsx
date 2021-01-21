import React from 'react';
import './index.less';

interface IProps {
  desc: String[];
}
function Desc({ desc }: IProps) {
  return (
    <div styleName="desc">
      <div styleName="flex">
        {desc &&
          desc.length > 0 &&
          desc.map((ds: string, index: number) => {
            return (
              <div styleName="item" key={index}>
                {ds}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Desc;
