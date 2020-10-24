/**
 * 通过window.getComputedStyle得到的属性过多
 * 过滤梳理得到我们想要的style属性
 */

const viaStyleProperty = {
  fill: [
    'background',
    'backgroundAttachment',
    'backgroundColor',
    'backgroundImage',
    'backgroundOrigin',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize'
  ]
};
