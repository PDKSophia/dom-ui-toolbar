/**
 * @desc 全局store
 */
import { useState } from 'react';
import _API from 'sugar-hox-devtools';
import { PHONE_MAPS, PHONE_SIZE } from '@common/constant';
import { IPhoneSizeProps } from '@common/types/common';

function usePhoneModel() {
  const [selectPhone, setSelectPhone] = useState<string>(PHONE_MAPS.iPhone5);
  const [selectPhoneSize, setSelectPhoneSize] = useState<IPhoneSizeProps>(PHONE_SIZE.iPhone5);

  const changeSelectPhone = (phone: string) => {
    setSelectPhone(phone);
    changeSelectPhoneSize(phone);
  };
  const changeSelectPhoneSize = (phone: string) => {
    console.log(phone);
    setSelectPhoneSize(PHONE_SIZE[phone]);
  };
  return {
    selectPhone,
    selectPhoneSize,
    changeSelectPhone
  };
}

usePhoneModel.namespace = 'usePhoneModel';

export default {
  usePhoneModel: _API.createModel(usePhoneModel)
};
