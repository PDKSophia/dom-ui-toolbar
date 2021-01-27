/**
 * @description 元素在画布中的随意拖拽
 */
import useEditorStoreModel from '@store/editor';
import * as Types from '@common/types/component';

/**
 * @param componentIndex 组件下标
 * @param event 鼠标拖拽Event
 */
export default function() {
  const { editorComponentList, dispatchUpdateComponentPositionAction } = useEditorStoreModel();

  return (componentIndex: number, e: React.MouseEvent) => {
    const currentEditComponent: Types.IStoreComponentProps = editorComponentList[componentIndex];
    if (e.button != 0) {
      // 屏蔽左键以外的按键
      return;
    }

    // 获得最开始，鼠标按下时的客户端区域的坐标
    const x = e.clientX;
    const y = e.clientY;

    // 获得元素之前的定位偏移量
    const top = Number(currentEditComponent?.style?.top) || 0;
    const left = Number(currentEditComponent?.style?.left) || 0;

    // 是否鼠标按下
    let isMouseDown = false;

    // 设置手势
    const cursor = 'move';

    const mouseMove = (moveEvent: MouseEvent) => {
      isMouseDown = true;

      // 获得元素移动过程中的客户端区域坐标
      const currentX = moveEvent.clientX;
      const currentY = moveEvent.clientY;

      const repaintStyle = {
        top: currentY - y + top,
        left: currentX - x + left,
        cursor
      };
      dispatchUpdateComponentPositionAction(componentIndex, repaintStyle);
    };

    const mouseUp = () => {
      isMouseDown = false;
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
    };
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  };
}
