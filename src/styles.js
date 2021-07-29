import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInLogin: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#05375a',
    padding: 10,
    paddingLeft: 30,
  },
  btnGroup: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnInLogin: {
    height: 40,
    width: '45%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 18,
  },
  linkText: {
    marginTop: 5,
    color: '#f0d700',
    fontSize: 16,
    fontWeight: 500,
  },
  container1: {
    flex: 1,
    backgroundColor: '#05375a',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputText: {
    color: '#05375a',
    fontSize: 18,
    fontWeight: 600,
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  inputContainer: {
    width: '90%',
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    left: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#5db8fe',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
