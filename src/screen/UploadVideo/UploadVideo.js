/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {index} from './index';
import Button from '../../component/Button';
import SelectRBSheet from '../../component/SelectRBSheet';

import {styles} from './style';

const UploadVideo = () => {
  const {
    refOpenCamera,
    openBS,
    onConfirmOpenCameraType,

    imageSelected,
  } = index();
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
      <Button onPress={openBS} btnStyle={styles.btn} text="Upload sdVideo" />
    </View>
  );
};

export default UploadVideo;
