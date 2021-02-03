import React from 'react';
import './index.less';
import { Switch, Menu, Dropdown, Button } from 'antd';
import { PC_SIZE } from '@common/constant';
import useEditorStoreModel from '@store/editor';
import useScreenSizeModel from '@store/screenSize';
import { DeleteTwoTone, HighlightTwoTone, CodeTwoTone, SaveTwoTone } from '@ant-design/icons';

function Header() {
  const { selectPc, changeSelectPc } = useScreenSizeModel();
  const { currentEditorComponent, dispatchClearTotalComponentAction } = useEditorStoreModel();

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
      <div styleName="action">
        <div styleName="view">
          <Button icon={<HighlightTwoTone twoToneColor="#52c41a" />} onClick={dispatchClearTotalComponentAction}>
            清除画布
          </Button>
        </div>
        <div styleName="view">
          <Button icon={<CodeTwoTone twoToneColor="#52c41a" />} onClick={() => {}}>
            撤回
          </Button>
        </div>
        <div styleName="view">
          <Button icon={<SaveTwoTone twoToneColor="#198fff" />} onClick={dispatchClearTotalComponentAction}>
            保存
          </Button>
        </div>
        <div styleName="view">
          <Button
            size="middle"
            style={{ marginRight: 8 }}
            icon={<DeleteTwoTone twoToneColor="#eb2f96" />}
            onClick={() => {}}
          >
            删除
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
