import React from 'react';
import './index.less';

interface IProps {
  text: string;
}
function Title({ text }: IProps) {
  return <h3 styleName="title">{text}</h3>;
}

export default Title;
