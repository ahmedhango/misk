import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  btn: {alignSelf: 'center'},
  itemTitle: {
    flex: 1,
    paddingHorizontal: wp(2),
    textAlign: 'left',
    fontWeight: '500',
    fontSize: typography.fontSize.fs13,
  },
});
