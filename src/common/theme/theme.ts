/**
 * @desc 主题色
 */
export interface IThemeProps {
  titleBackgroundColor: string; // 一级背景颜色
  secondaryBackgroundColor: string; // 二级背景颜色
  thirdBackgroundColor: string; // 三级背景颜色
  mainColor: string; // 一级颜色
  secondaryColor: string; // 二级颜色
}

export const light: IThemeProps = {
  titleBackgroundColor: '#ffffff',
  secondaryBackgroundColor: '#f0f2f5',
  thirdBackgroundColor: '#f4f7fd',
  mainColor: '#0e1726',
  secondaryColor: '#6e747d'
};
