import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from './src/themes/colors';
import typography from './src/themes/typography';

export const styles = StyleSheet.create({
  billDetails: {
    fontSize: typography.fontSize.fs24,
    fontWeight: '700',
    textAlign: 'left',
    marginTop: hp(1),
  },
  uploadImageView: {
    height: hp(22),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(2),
    backgroundColor: colors.gray25,
  },
  uploadImageText: {
    fontSize: typography.fontSize.fs13,
    marginTop: hp(1),
  },
  input: {
    width: '100%',
    marginTop: hp(1),
    marginBottom: hp(2),
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  itemTitle: {
    flex: 1,
    paddingHorizontal: wp(2),
    textAlign: 'left',
    fontWeight: '500',
    fontSize: typography.fontSize.fs13,
  },
  itemIcon: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(1),
  },
  offlineTransaction: {
    flex: 1,
    fontSize: typography.fontSize.fs14,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: wp(1),
  },
  categoryItemParent: {
    width: '100%',
    alignSelf: 'center',
    padding: wp(1.5),
    borderRadius: wp(1.5),
    borderColor: colors.gray25,
  },
  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    padding: wp(2.5),
  },
  title: {
    flex: 1,
    fontSize: typography.fontSize.fs14,
    fontWeight: '500',
    textAlign: 'left',
    paddingHorizontal: wp(2),
  },
  amount: {
    fontSize: typography.fontSize.fs11,
    fontWeight: '500',
    textAlign: 'left',
  },
});
