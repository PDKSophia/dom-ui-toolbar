/**
 * @desc 数据模型
 */
export declare type positionMaps = 'static' | 'inherit' | 'relative' | 'absolute' | 'fixed';
export declare type textAlignMaps = 'left' | 'center' | 'right' | 'justify' | 'inherit';

export interface IBaseModel {
  opacity?: number; // 透明度
  textAlign?: textAlignMaps; // 元素文本水平对齐方式
}

export interface IFontModel extends IBaseModel {
  color: string; // 字体颜色
  fontFamily: string; // 字体类型
  fontSize: number | string; // 字体大小
  lineHeight: number | string; // 字体行高
  letterSpacing: number | string; // 字体间距
}

export interface IFillModel extends IBaseModel {
  backgroundColor: string; // 背景颜色
}

export interface ILayoutModel extends IBaseModel {
  width: number | string; // 宽度
  height: number | string; // 宽度
  position: positionMaps; // 定位
  borderRadius: number | string; // 圆角
}
