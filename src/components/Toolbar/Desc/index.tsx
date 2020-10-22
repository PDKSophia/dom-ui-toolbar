import React from 'react';
import styles from './index.less';

interface IProps {
  desc: String[];
}
function Desc({ desc }: IProps) {
  return (
    <div className={styles.desc}>
      <div className={styles.flex}>
        {desc &&
          desc.length > 0 &&
          desc.map((ds: string, index: number) => {
            return (
              <div className={styles.item} key={index}>
                {ds}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Desc;
