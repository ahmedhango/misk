/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import Button from '../../component/Button';
import SelectRBSheet from '../../component/SelectRBSheet';
import {openCamera, openPicker} from '../../utils/ImageCropPicker';

import {styles} from './style';

const UploadVideo = () => {
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

  const renderOpenCameraAndPhotos = (item, index) => {
    return (
      <View style={styles.item}>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          adjustsFontSizeToFit={true}
          style={styles.itemTitle}>
          {item}
        </Text>
      </View>
    );
  };

  const renderOpenCamera = () => {
    return (
      <SelectRBSheet
        ref={refOpenCamera}
        halfHeight
        data={['Camera', 'Galary']}
        renderItem={renderOpenCameraAndPhotos}
        title={'Select type'}
        onConfirm={onConfirmOpenCameraType}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderOpenCamera()}
      <Button
        onPress={() => refOpenCamera.current.open()}
        btnStyle={styles.btn}
        text="Upload Video"
      />
    </View>
  );
};

export default UploadVideo;
