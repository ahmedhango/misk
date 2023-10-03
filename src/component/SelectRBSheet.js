import React, {useRef, forwardRef, useImperativeHandle, useState} from 'react';
import {View, FlatList, Pressable, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from './Button';
import typography from '../themes/typography';
import {colors} from '../themes/colors';
import CText from './CText';

const SelectRBSheet = ({...props}, ref) => {
  const sheetRef = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      sheetRef.current.open();
    },
    close: () => {
      sheetRef.current.close();
    },
  }));

  const defaultProps = {
    title: props.title ? props.title : 'Select',
    btnTitle: props.btnTitle ? props.btnTitle : 'Save',
    multiselect: props.multiselect ? props.multiselect : false,
    halfHeight: props.halfHeight ? hp(45) : hp(80),
    data: props.data ? props.data : [],
    renderItem: props.renderItem ? props.renderItem : () => <></>,
    onCancel: props.onCancel ? props.onCancel : () => {},
    onConfirm: props.onConfirm ? props.onConfirm : () => {},
    onClose: props.onClose ? props.onClose : () => {},
  };

  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const onOpenRBSheet = () => {};

  const onCloseRBSheet = () => {
    defaultProps.onClose();
  };

  // const onCancelRBSheet = () => {
  //   defaultProps.onCancel();
  // };

  const onConfirmRBSheet = () => {
    defaultProps.onConfirm(selectedIndexes);
  };

  const isInArr = index => {
    const indexInArr = selectedIndexes.findIndex(item => item == index);
    return indexInArr >= 0;
  };

  const addItemToSelections = index => {
    if (defaultProps.multiselect) {
      let arr = [...selectedIndexes];
      const indexInArr = selectedIndexes.findIndex(item => item == index);
      if (indexInArr >= 0) {
        arr.splice(indexInArr, 1);
        setSelectedIndexes(arr);
      } else {
        arr.push(index);
        setSelectedIndexes(arr);
      }
    } else {
      let arr = [];
      const indexInArr = selectedIndexes.findIndex(item => item == index);
      if (indexInArr >= 0) {
        setSelectedIndexes(arr);
      } else {
        arr.push(index);
        setSelectedIndexes(arr);
      }
    }
  };

  const renderListItem = ({item, index}) => {
    return (
      <Pressable
        style={{borderBottomColor: colors.gray100, ...styles.item}}
        onPress={() => addItemToSelections(index)}>
        <View style={styles.itemChild}>
          {defaultProps.renderItem(item, index)}
        </View>
        <View
          style={{
            borderColor: isInArr(index) ? colors.primary500 : colors.gray600,
            ...styles.selectionView,
          }}>
          {isInArr(index) && (
            <View
              style={{borderColor: colors.primary500, ...styles.selectedItem}}
            />
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <RBSheet
      ref={sheetRef}
      animationType={'fade'}
      height={defaultProps.halfHeight} // Comment this line if height is auto
      closeOnDragDown={true}
      closeOnPressMask={true}
      onOpen={onOpenRBSheet}
      onClose={onCloseRBSheet}
      keyboardAvoidingViewEnabled={false}
      customStyles={{
        wrapper: {backgroundColor: colors.modalsAndSheetsBackdropColor},
        container: {backgroundColor: colors.white, ...styles.RBsheetContainer},
      }}>
      <View style={styles.container}>
        <CText allowFontScaling={false} style={styles.title}>
          {defaultProps.title}
        </CText>
        <FlatList
          data={defaultProps.data}
          renderItem={renderListItem}
          style={styles.flatlist}
          contentContainerStyle={styles.flatlistContainer}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        />
        <Button
          text={defaultProps.btnTitle}
          btnStyle={styles.btn}
          onPress={onConfirmRBSheet}
        />
      </View>
    </RBSheet>
  );
};

export default forwardRef((props, ref) => SelectRBSheet(props, ref));

const styles = StyleSheet.create({
  RBsheetContainer: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    flexDirection: 'column',
    overflow: 'hidden',
    // height: 'auto', // comment this line if height is fixed
  },
  //////////////////////////////////////
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: hp(4),
  },
  title: {
    width: '100%',
    fontSize: typography.fontSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: wp(3),
    marginBottom: hp(2),
  },
  flatlist: {
    width: '100%',
    padding: wp(3),
  },
  flatlistContainer: {
    flexGrow: 1,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: hp(1),
    marginBottom: hp(1),
  },
  itemChild: {
    flex: 1,
    marginRight: wp(3),
  },
  selectionView: {
    width: wp(6) + 2,
    height: wp(6) + 2,
    borderRadius: wp(3) + 1,
    borderWidth: 1,
    overflow: 'hidden',
  },
  selectedItem: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    borderWidth: wp(1.5),
  },
  btn: {
    marginTop: hp(2),
  },
});
