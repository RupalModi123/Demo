import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');
const widthDevice = Dimensions.get('window').width;
export var ConstantId = {
  /* ----------------- UI configuration and fonts-------------------- */
  deviceHeight: Dimensions.get('window').height,
  deviceWidth: Dimensions.get('window').width,
  fontRegular: 'Poppins-Regular',
  fontSemiBold: 'Poppins-SemiBold',
  fontBold: 'Poppins-Bold',
  fontMedium: 'Poppins-Medium',

  /*Filter data  */
  FilterData: '',
  masterColor: [],
  masterInteriorColors: [],
  masterYears: [],
  masterFeature: [],
  masterCategory: [],
  BrandList: [],
  MasterBrandModals: [],
  SelectSortBy: '',
  SelectType: '',

  /*Create ad data  */
  SelectBrand: '',
  SelectModal: '',
  SelectSubModal: '',
  SelectYear: '',
  SelectMilage: '',
  SelectPrice: '',
  SelectColor: '',
  SelectInteriorColor: '',
  SelectWheelsInch: '',
  SelectNumberOfSeats: '',
  editDetailData: '',
  comingFrom: '',

  /*App launch data*/
  selectCity: '',
  selectCityID: 0,
  Token: '',
  CarTypeSelectTab: 'PHEV',
  UserId: '',

  /*Purchase Data*/
  subscription_id: '',
  amount: 0.0,
  duration: 0,
  is_paid: false,
  adId: '',
  desp: '',

  /*fonts size  */
  // font_8: widthNew(2.4),
  // font_10: widthNew(2.6),
  // font_11: widthNew(2.8),
  // font_12: widthNew(2.9),
  // font_13: widthNew(3.2),
  // font_14: widthNew(3.5),
  // font_16: widthNew(3.8),
  // font_18: widthNew(4.1),
  // font_20: widthNew(5),
  // font_30: widthNew(7),
  font_8: widthDevice >= 768 ? 13 : 8,
  font_10: widthDevice >= 768 ? 15 : 10,
  font_11: widthDevice >= 768 ? 16 : 11,
  font_12: widthDevice >= 768 ? 17 : 12,
  font_13: widthDevice >= 768 ? 18 : 13,
  font_14: widthDevice >= 768 ? 19 : 14,
  font_16: widthDevice >= 768 ? 21 : 16,
  font_18: widthDevice >= 768 ? 23 : 18,
  font_20: widthDevice >= 768 ? 25 : 20,
  font_30: widthDevice >= 768 ? 35 : 30,
  /*Device Type  */
  is_IPad: widthDevice >= 768 ? true : false,
};
function widthNew(givenWidth) {
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
}

const widthToDp = (number) => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const heightToDp = (number) => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export {widthToDp, heightToDp};
