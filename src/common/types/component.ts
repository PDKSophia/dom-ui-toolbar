export interface IDragProps {
  draggable: boolean;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
}
