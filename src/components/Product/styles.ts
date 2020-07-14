import { COLORS } from '../../config/constants';
export const styles = {
  content: {
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
    height: 126,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  image: {
    flex: 1,
    width: 60,
    borderRadius: 4,
    backgroundColor: COLORS.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    flex: 3,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 14,
    color: COLORS.juice,
  }
};