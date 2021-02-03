/**
 * @description 组件接口模型
 */

import { textAlignType, BaseComponentStyle } from './common';

// Button 组件
export interface ButtonComponentStyle extends BaseComponentStyle {
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
}

// Text 组件
export interface TextComponentStyle extends BaseComponentStyle {
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
}

// Cover 组件
export interface CoverComponentStyle extends BaseComponentStyle {
  backgroundColor?: string; //背景颜色
  borderColor?: string; // 边框颜色
  borderWidth?: number | string; // 边框大小
  borderRadius?: number | string; // 圆角
}
