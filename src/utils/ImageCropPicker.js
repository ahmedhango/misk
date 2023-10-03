import ImageCropPicker from 'react-native-image-crop-picker';

export const openCamera = callback => {
  ImageCropPicker.openCamera({
    mediaType: 'any',
    cropping: false,
    compressImageQuality: 0.5,
  })
    .then(image => {
      callback({image});
    })
    .catch(error => {
      callback(null);
    });
};

export const openPicker = callback => {
  ImageCropPicker.openPicker({
    mediaType: 'any',
    cropping: false,
    compressImageQuality: 0.5,
  })
    .then(image => {
      callback({image});
    })
    .catch(error => {
      callback(null);
    });
};
