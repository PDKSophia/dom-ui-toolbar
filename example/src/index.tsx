import React, { useEffect, useState, useRef } from 'react';
import './index.less';
import { render } from 'react-dom';
import SugarDomUI from '../../src';

const { Toolbar, Material, WinCenter } = SugarDomUI;

function Main() {
  const toolbarRef = useRef(null);
  const materialRef = useRef(null);
  return (
    <>
      <div ref={materialRef} styleName="material">
        <Material />
      </div>
      <div styleName="content">
        <WinCenter />
      </div>
      <div ref={toolbarRef} styleName="action">
        <Toolbar />
      </div>
    </>
  );
}

render(<Main />, document.getElementById('root'));
