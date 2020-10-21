import React from 'react';
import styles from './index.less';
import Title from '@components/Toolbar/Title';
class Toolbar extends React.Component {
  render() {
    return (
      <div className={styles.toolbar}>
        <Title text="1" />
      </div>
    );
  }
}

export default Toolbar;
