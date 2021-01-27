/**
 * @desc 全局store
 */
import { useState } from 'react';
import _ from 'sugar-hox-devtools';
import { PC_SIZE } from '@common/constant';
import { ISizeProps } from '@common/types/common';

function useScreenSizeModel() {
  const [selectPc, setSelectPc] = useState<string>('small');
  const [selectPcSize, setSelectPcSize] = useState<ISizeProps>(PC_SIZE.small);

  const changeSelectPc = (pc: string) => {
    setSelectPc(pc);
    changeSelectPcSize(pc);
  };
  const changeSelectPcSize = (pc: string) => {
    setSelectPcSize(PC_SIZE[pc]);
  };

  return {
    selectPc,
    selectPcSize,
    changeSelectPc
  };
}

useScreenSizeModel.namespace = 'useScreenSizeModel';

export default _.createModel(useScreenSizeModel);
