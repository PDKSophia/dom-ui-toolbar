import React from 'react';
import './index.less';
import { Switch, Menu, Dropdown, Button } from 'antd';
import { PC_SIZE } from '@common/constant';
import useScreenSizeModel from '@store/screenSize';

function Header() {
  const { selectPc, changeSelectPc } = useScreenSizeModel();

  function renderMenu() {
    return (
      <Menu
        onClick={({ key }) => {
          changeSelectPc(key);
        }}
      >
        {Object.keys(PC_SIZE).map((rect: string, index: number) => {
          return (
            <Menu.Item key={rect}>
              {PC_SIZE[rect].WIDTH} * {PC_SIZE[rect].HEIGHT}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }

  return (
    <div styleName="header">
      <div styleName="view" onClick={() => {}}>
        开启全屏
        <Switch size="small" checked={false} className="marginLeft" />
      </div>
      <div styleName="view" onClick={() => {}}>
        屏幕尺寸
        <Dropdown overlay={renderMenu} placement="bottomLeft" className="marginLeft" trigger={['click']}>
          <Button styleName="phoneBtn" onClick={e => e.preventDefault()}>
            {PC_SIZE[selectPc].WIDTH} * {PC_SIZE[selectPc].HEIGHT}
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
