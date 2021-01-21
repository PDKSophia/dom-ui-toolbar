/**
 * @desc Layout 内容模块
 */
import React from 'react';
import './index.less';
import Title from '@components/Toolbar/Title';
import Textarea from '@components/Design/Textarea';

function Code() {
  return (
    <div styleName="code">
      <Title text="代码" />
      <div styleName="block">
        <p styleName="property">
          <span styleName="key">width</span>
          <span styleName="line">: </span>
          <span styleName="value">294px</span>
          <span styleName="line">;</span>
        </p>
        <p styleName="property">
          <span styleName="key">height</span>
          <span styleName="line">: </span>
          <span styleName="value">96px</span>
          <span styleName="line">;</span>
        </p>
        <p styleName="property">
          <span styleName="key">font-size</span>
          <span styleName="line">: </span>
          <span styleName="value">12px</span>
          <span styleName="line">;</span>
        </p>
        <p styleName="property">
          <span styleName="key">font-weight</span>
          <span styleName="line">: </span>0<span styleName="value">400</span>
          <span styleName="line">;</span>
        </p>
        <p styleName="property">
          <span styleName="key">color</span>
          <span styleName="line">: </span>
          <span styleName="value">#000000</span>
          <span styleName="line">;</span>
        </p>
      </div>
    </div>
  );
}

export default Code;
