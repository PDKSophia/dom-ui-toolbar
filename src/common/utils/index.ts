/**
 * @description 随机生成uuid
 */
export function createUUid() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
    .replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0;
      let v = c === 'x' ? r : (r & 3) | 8;
      return v.toString(16);
    })
    .toUpperCase();
}

export function stopPropagation(e: React.MouseEvent): any {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else if (e.preventDefault) {
    e.preventDefault();
  } else {
    window.event.returnValue == false;
  }
}
