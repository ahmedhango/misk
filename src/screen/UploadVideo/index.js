import {useRef, useState} from 'react';
import {openCamera, openPicker} from '../../utils/ImageCropPicker';

export const index = () => {
  const refOpenCamera = useRef();

  const [imageSelected, setImageSelected] = useState('');

  const onConfirmOpenCameraType = index => {
    if (index == 1) {
      openPicker(res => {
        if (res) {
          setImageSelected(res.image.path);
        }
        refOpenCamera.current.close();
      });
    } else {
      openCamera(res => {
        if (res) {
          setImageSelected(res.image.path);
        }
        refOpenCamera.current.close();
      });
    }
  };
  const openBS = () => refOpenCamera.current.open();
  return {
    refOpenCamera,
    openBS,
    onConfirmOpenCameraType,
  };
};
