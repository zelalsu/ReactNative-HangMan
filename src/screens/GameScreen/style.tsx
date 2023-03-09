import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  innerTextContainer: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 16,
  },
  wordContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 62,
  },
  user: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    marginTop: 16,
    marginHorizontal: 32,
    borderRadius: 16,
  },
  button: {},
});

export default styles;
