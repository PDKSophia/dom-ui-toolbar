// 拖拽
export interface IDragProps {
  draggable: boolean;
  componentKey?: string;
  componentStyles?: React.CSSProperties;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, componentRefs?: HTMLDivElement) => void;
}

// 单个组件
export interface IStoreComponentProps {
  componentId: string; // 组件id
  componentInstance: any; // 组件实例
  style: React.CSSProperties; // 组件样式
}
