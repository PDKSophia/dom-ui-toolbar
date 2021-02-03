import _ from 'lodash';
/**
 * @description 将 rgba 颜色转换成 16 进制颜色
 */
export function formatRgbaTo16Color(color: string) {
  var values = color
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',');

  const opacity = values[3] ? parseFloat(values[3]) : 1;
  const red = Math.floor(opacity * parseInt(values[0]) + (1 - opacity) * 255);
  const green = Math.floor(opacity * parseInt(values[1]) + (1 - opacity) * 255);
  const blue = Math.floor(opacity * parseInt(values[2]) + (1 - opacity) * 255);

  return (
    '#' +
    ('0' + red.toString(16)).slice(-2) +
    ('0' + green.toString(16)).slice(-2) +
    ('0' + blue.toString(16)).slice(-2)
  );
}

/**
 * 将字符串数字转成整型数字
 * @param {String} value
 * @returns {Number}
 */
export function transformStringToNumber(value: string): number {
  return Number(value);
}

/**
 * 剔除px
 */
export function reducePX(value: string | number): string {
  if (!value) return '';
  const _value = String(value);
  return _value.replace('px', '');
}

// 返回对象不存在[props]的属性值
export function omitStyle(styles: React.CSSProperties, props: string[]) {
  return _.omit(styles, props);
}
// 返回对象[props]的属性值
export function pickStyle(styles: React.CSSProperties, props: string[]) {
  return _.pick(styles, props);
}
/**
 * 根据DOM获取该元素所有style属性，通过数据模型得到需要的属性
 * @param dom 点击触发的DOM元素
 * @param dataStyles 数据模型中的属性
 */
function getDomStyle(
  dom: HTMLDivElement,
  dataStyles: React.CSSProperties
): {
  [key: string]: any;
} {
  if (dom) {
    let resultStyle: React.CSSProperties = {};
    const computedStyle = window.getComputedStyle(dom);
    Object.keys(dataStyles).forEach((styleName: string) => {
      if (!resultStyle[styleName]) {
        const styleValue = computedStyle[styleName];
        if (/color/i.test(styleName)) {
          if (!/#/.test(styleValue)) {
            resultStyle[styleName] = formatRgbaTo16Color(styleValue);
          } else {
            resultStyle[styleName] = styleValue;
          }
        } else {
          resultStyle[styleName] = styleValue;
        }
      }
    });
    return resultStyle;
  }
  return {};
}

export default getDomStyle;
