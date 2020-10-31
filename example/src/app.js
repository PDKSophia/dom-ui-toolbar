import React, { useEffect, useState, useRef } from 'react';
import styles from './index.less';
import { render } from 'react-dom';
import { useClickAway } from 'react-use';
import classnames from 'classnames/bind';
import SugarDomUI from '../../src';
let cname = classnames.bind(styles);

const { Toolbar, Material } = SugarDomUI;

function Main() {
  const addStyle = '1px solid red';
  const prevDom = useRef(null);
  const demoRef = useRef(null);
  const toolbarRef = useRef(null);
  const [currentDom, setCurrentDom] = useState(null);
  const [showToolbar, setShowToolbar] = useState(true);

  useEffect(() => {
    demoRef && demoRef.current.addEventListener('click', toggleToolbar, false);
    return () => {
      demoRef.current.removeEventListener('click', toggleToolbar, false);
    };
  }, []);

  useClickAway(demoRef, () => {
    // setShowToolbar(false);
    if (prevDom.current) {
      prevDom.current.style.boxSizing = 'content-box';
      prevDom.current.style.border = 'none';
    }
  });

  function toggleToolbar(e) {
    setCurrentDom(e.target);
    setShowToolbar(true);
    if (e.target.style.border === addStyle) {
      e.target.style.boxSizing = 'content-box';
      e.target.style.border = 'none';
    } else {
      if (prevDom.current) {
        prevDom.current.style.boxSizing = 'content-box';
        prevDom.current.style.border = 'none';
      }
      prevDom.current = e.target;
      e.target.style.boxSizing = 'border-box';
      e.target.style.border = '1px solid red';
    }
  }

  function onChangeStyle(newStyle) {
    console.log('最新的styles: ', newStyle);
    if (currentDom) {
      // currentDom.style = newStyle;
      console.log(currentDom, Object.getOwnPropertyDescriptor(currentDom, 'style'));
      Object.keys(newStyle).forEach(key => {
        currentDom.style[key] = newStyle[key];
      });
    }
  }
  return (
    <>
      <div
        ref={toolbarRef}
        className={cname({
          material: true
        })}
      >
        <Material />
      </div>
      <div className={styles.demo} ref={demoRef}>
        <div className={styles.dom1}>DOM 1</div>
        <div className={styles.flex}>
          <div className={styles.box}>
            <div className={styles.dom2}>DOM 2</div>
            <div className={styles.dom3}>DOM 3</div>
            <div className={styles.dom4}>DOM 4</div>
          </div>
          <div className={styles.dom5}>DOM 5</div>
        </div>
      </div>
      <div
        ref={toolbarRef}
        className={cname({
          action: true,
          open: showToolbar,
          hidden: !showToolbar
        })}
      >
        <Toolbar dom={currentDom} onChangeStyle={onChangeStyle} />
      </div>
    </>
  );
}

render(<Main />, document.getElementById('root'));
