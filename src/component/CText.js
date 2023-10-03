import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../themes/colors';
import typography from '../themes/typography';

const CText = ({style, children, ...props}) => {
  return (
    <Text
      {...props}
      style={{...styles.defaultStyle, ...style}}
      allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default CText;

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: typography.fontSize.fs14,
    textAlign: 'left',
    color: colors.gray900,
  },
});
