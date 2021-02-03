/**
 * @desc Layout 内容模块
 */
import React from 'react';
import './index.less';
import Title from '@components/Toolbar/Title';
import Label from '@components/Toolbar/Label';
import Textarea from '@components/Design/Textarea';

interface IProps {
  componentInnerText?: string;
  onUpdateInnerText?: (text: string) => void;
}
class Content extends React.Component<IProps> {
  render() {
    return (
      <div styleName="content">
        <Title text="信息" />
        <div styleName="box">
          <Label label="内容" />
          <Textarea defaultValue="" value={this.props.componentInnerText} onChange={this.props.onUpdateInnerText} />
        </div>
      </div>
    );
  }
}

export default Content;
