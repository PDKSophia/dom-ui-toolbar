interface ISizeProps {
  DPR: number;
  WIDTH: number;
  HEIGHT: number;
}

export declare type PositionType = 'static' | 'inherit' | 'relative' | 'absolute' | 'fixed';
export declare type textAlignType = 'left' | 'center' | 'right' | 'justify' | 'inherit';

interface BaseComponentStyle {
  opacity?: number; // 透明度
  position?: PositionType; // 定位
  width?: number | string; // 宽度
  height?: number | string; // 宽度
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  cursor?: string;
  zIndex?: number;
}

export { ISizeProps, BaseComponentStyle };
