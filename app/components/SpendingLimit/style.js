import {Platform} from 'react-native';
export const spendingLimitStyle = {
  container: {
    flex: 1,
    // marginVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  priceText: {
    fontSize: 24,
    marginLeft: 15,
    fontWeight: 'bold',
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
    marginBottom: 20,
  },
  textline: {
    color: '#22222266',
    fontSize: 14,
  },
  rowButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  saveBtnContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#01D167',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? '80%' : '60%',
    borderRadius: 30,
  },
  btnText: {
    fontSize: 14,
    color: 'white',
  },
};
