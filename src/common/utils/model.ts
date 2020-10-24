/**
 * 数据处理 utils
 */
import { transformNumber, reducePX } from './';

// 将 `120px` 转成 120
export function transformValue(value: string): number {
  const a = transformNumber(reducePX(value));
  return transformNumber(reducePX(value));
}
