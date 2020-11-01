import { IPhoneSizeProps } from '@common/types/common';

export const PHONE_MAPS = {
  iPhone5: 'iPhone5',
  iPhone6: 'iPhone6',
  iPhone7: 'iPhone7',
  iPhone8: 'iPhone8',
  iPhone6_Plus: 'iPhone6_Plus',
  iPhone7_Plus: 'iPhone7_Plus',
  iPhone8_Plus: 'iPhone8_Plus',
  iPhoneX: 'iPhoneX',
  iPhoneXR: 'iPhoneXR',
  iPhoneXS_Max: 'iPhoneXS_Max'
};

export const PHONE_SIZE: {
  [key: string]: IPhoneSizeProps;
} = {
  iPhone5: {
    DPR: 1,
    WIDTH: 320,
    HEIGHT: 568
  },
  iPhone6: {
    DPR: 1,
    WIDTH: 375,
    HEIGHT: 667
  },
  iPhone7: {
    DPR: 1,
    WIDTH: 375,
    HEIGHT: 667
  },
  iPhone8: {
    DPR: 1,
    WIDTH: 375,
    HEIGHT: 667
  },
  iPhone6_Plus: {
    DPR: 1,
    WIDTH: 414,
    HEIGHT: 736
  },
  iPhone7_Plus: {
    DPR: 1,
    WIDTH: 414,
    HEIGHT: 736
  },
  iPhone8_Plus: {
    DPR: 1,
    WIDTH: 414,
    HEIGHT: 736
  },
  iPhoneX: {
    DPR: 1,
    WIDTH: 375,
    HEIGHT: 812
  },
  iPhoneXR: {
    DPR: 1,
    WIDTH: 414,
    HEIGHT: 896
  },
  iPhoneXS_Max: {
    DPR: 1,
    WIDTH: 414,
    HEIGHT: 896
  }
};
