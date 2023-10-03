import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../themes/colors';
import typography from '../themes/typography';
import CText from './CText';

const Button = ({...props}) => {
  const defaultProps = {
    disabled: props.disabled || false,
    btnStyle: props.btnStyle || {},
    txtStyle: props.txtStyle || {},
    text: props.text || '',
    onPress: props.onPress ? props.onPress : () => {},
    testID: props.testID,
  };

  return (
    <Pressable
      testID={defaultProps.testID}
      onPress={defaultProps.disabled ? null : defaultProps.onPress}
      style={{
        backgroundColor: colors.primary500,
        ...styles.defaultBtnStyle,
        ...defaultProps.btnStyle,
        ...(defaultProps.disabled && {backgroundColor: colors.gray400}),
      }}>
      <CText
        allowFontScaling={false}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={{
          ...styles.defaultTxtStyle,
          ...defaultProps.txtStyle,
          ...(defaultProps.disabled && {color: colors.gray100}),
        }}>
        {defaultProps.text}
      </CText>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  defaultBtnStyle: {
    width: wp(94),
    height: hp(6.4),
    borderRadius: 12,
    justifyContent: 'center',
  },
  defaultTxtStyle: {
    width: '100%',
    paddingHorizontal: wp(5),
    fontSize: typography.fontSize.fs15,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.white,
  },
});
