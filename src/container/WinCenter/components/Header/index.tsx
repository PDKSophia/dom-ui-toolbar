import React from 'react';
import styles from './index.less';
import { Switch, Menu, Dropdown, Button } from 'antd';
import { PHONE_MAPS } from '@common/constant';
import globalModel from '@store/global';

function Header() {
  const { selectPhone, changeSelectPhone } = globalModel.usePhoneModel();

  function renderMenu() {
    return (
      <Menu
        onClick={({ key }) => {
          changeSelectPhone(key);
        }}
      >
        {Object.keys(PHONE_MAPS).map((rect: string, index: number) => {
          return <Menu.Item key={rect}>{rect}</Menu.Item>;
        })}
      </Menu>
    );
  }
  return (
    <div className={styles.header}>
      <div className={styles.view} onClick={() => {}}>
        开启全屏
        <Switch size="small" checked={false} className={styles.marginLeft} />
      </div>
      <div className={styles.view} onClick={() => {}}>
        机型尺寸
        <Dropdown overlay={renderMenu} placement="bottomLeft" className={styles.marginLeft} trigger={['click']}>
          <Button className={styles.phoneBtn} onClick={e => e.preventDefault()}>
            {selectPhone}
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
