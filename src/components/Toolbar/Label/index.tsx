import React from 'react';
import './index.less';

interface IProps {
  label: string;
}
function Label({ label }: IProps) {
  return <span styleName="text">{label}</span>;
}

export default Label;
