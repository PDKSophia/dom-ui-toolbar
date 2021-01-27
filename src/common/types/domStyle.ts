/**
 * @description DOM 元素定义
 */

export declare type PositionType = 'static' | 'inherit' | 'relative' | 'absolute' | 'fixed';
export declare type textAlignType = 'left' | 'center' | 'right' | 'justify' | 'inherit';

export interface IDomStyleType {
  opacity?: number; // 透明度
  width?: number | string; // 宽度
  height?: number | string; // 宽度
  position?: PositionType; // 定位
  textAlign?: textAlignType; // 对齐方式
  backgroundColor?: string; //背景颜色
  color?: string; // 字体颜色
  fontFamily?: string; // 字体类型
  fontSize?: number | string; // 字体大小
  lineHeight?: number | string; // 字体行高
  letterSpacing?: number | string; // 字体间距
  borderColor?: string; // 边框颜色
  borderWidth?: number | string; // 边框大小
  borderRadius?: number | string; // 圆角
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  cursor?: string;
  zIndex?: number;
}
