// 拖拽
export interface IDragProps {
  draggable: boolean;
  componentKey?: string;
  componentStyles?: React.CSSProperties;
  componentInnerText?: string;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, componentRefs?: HTMLDivElement) => void;
}

// 单个组件
export interface IStoreComponentProps {
  componentId: string; // 组件id
  componentName: string; // 组件名
  componentInstance: any; // 组件实例
  componentInnerText: string; // 组件文本内容
  style: React.CSSProperties; // 组件样式
}

// Toolbar 工具条组件
export interface IToolbarLayoutProps {
  width?: number | string;
  height?: number | string;
}
export interface IToolbarFillProps {
  backgroundColor?: string;
  borderWidth?: number | string;
  borderColor?: string;
  borderRadius?: number | string;
}
export interface IToolbarFontProps {
  fontSize?: number | string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  color?: string;
}
