import React from 'react';
import styles from './index.less';
import Layout from '../Layout';
class Toolbar extends React.Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <Layout />
      </div>
    );
  }
}

export default Toolbar;
