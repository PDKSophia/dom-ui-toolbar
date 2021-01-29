import { IDomStyleType } from './domStyle';
// 拖拽
export interface IDragProps {
  componentKey?: string;
  componentStyles?: IDomStyleType;
  draggable: boolean;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, componentRefs?: HTMLDivElement) => void;
}

// 单个组件
export interface IStoreComponentProps {
  componentId: string; // 组件id
  componentInstance: any; // 组件实例
  style: IDomStyleType; // 组件样式
}
