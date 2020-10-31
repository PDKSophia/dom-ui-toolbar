export function filterStyles(styles: CSSStyleDeclaration, styleKeys: String[]): { [key: string]: any } {
  let styleMaps = {};
  styleKeys.forEach((styleName: string) => {
    if (!styleMaps[styleName]) {
      styleMaps[styleName] = styles[styleName];
    }
  });
  return styleMaps;
}

/**
 * 根据DOM获取该元素所有style属性，通过数据模型得到需要的属性
 * @param dom 点击触发的DOM元素
 * @param model 数据模型
 */
export function getDomStyles(dom: any, model: any): { [key: string]: any } {
  const styles = window.getComputedStyle(dom);
  return filterStyles(styles, Object.keys(model));
}

/**
 * 将字符串数字转成整型数字
 * @param {String} value
 * @returns {Number}
 */
export function transformNumber(value: String): number {
  return Number(value);
}

/**
 * 剔除px
 */
export function reducePX(value: String): String {
  if (!value) return '';
  return value.replace('px', '');
}
