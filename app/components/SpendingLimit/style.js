import {Platform} from 'react-native';
export const spendingLimitStyle = {
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  setWeekelyText: {
    fontSize: 14, 
    marginLeft: 12, 
    color:'#222222'
  },
  priceText: {
    fontSize: 24,
    marginLeft: 10,
    fontFamily: "AvenirNextLTPro-Bold",
    color: '#222222',
  },
  pricebox: {
    backgroundColor: '#01D167',
    height: 22,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  dollarText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  line: {
    backgroundColor: '#E5E5E5',
    height: 0.5,
    marginBottom: 18,
  },
  textline: {
    color: '#22222266',
    fontSize: 13,
  },
  rowButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  saveBtnContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#01D167',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? '100%' : '80%',
    borderRadius: 30,
  },
  btnText: {
    fontSize: 14,
    color: 'white',
  },
};
