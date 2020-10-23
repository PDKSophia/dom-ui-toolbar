import React from 'react';
import styles from './index.less';
import Layout from '../Layout';
import Content from '../Content';
import Fill from '../Fill';
import Font from '../Font';
import Code from '../Code';

class Toolbar extends React.Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <Layout />
        <Fill />
        <Font />
        <Content />
        <Code />
      </div>
    );
  }
}

export default Toolbar;
