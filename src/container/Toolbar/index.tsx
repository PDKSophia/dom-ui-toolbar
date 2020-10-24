import React from 'react';
import styles from './index.less';
import Layout from '../Layout';
import Content from '../Content';
import Fill from '../Fill';
import Font from '../Font';
import Code from '../Code';
import MyScrollBox from '@components/Toolbar/MyScrollBox';

class Toolbar extends React.Component {
  render() {
    const height = document.body.clientHeight;
    return (
      <div className={styles.toolbar}>
        <MyScrollBox maxHeight={height}>
          <Layout />
          <Fill />
          <Font />
          <Content />
          <Code />
        </MyScrollBox>
      </div>
    );
  }
}

export default Toolbar;
