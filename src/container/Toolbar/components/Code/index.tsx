/**
 * @desc Code 代码区域
 */
import React from 'react';
import './index.less';
import Title from '@components/Toolbar/Title';

interface IProps {
  styles: React.CSSProperties;
}
function Code({ styles }: IProps) {
  return (
    <div styleName="code">
      <Title text="代码" />
      <div styleName="block">
        {styles &&
          Object.keys(styles).length > 0 &&
          Object.keys(styles).map((styleName: string, styleIndex: number) => {
            return (
              <p styleName="property" key={styleIndex}>
                <span styleName="key">{styleName}</span>
                <span styleName="line">: </span>
                <span styleName="value">{styles[styleName]}</span>
                <span styleName="line">;</span>
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default Code;
