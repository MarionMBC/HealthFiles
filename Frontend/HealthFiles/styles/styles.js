import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:40,
    paddingVertical:30,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    backgroundColor:'#40E0D0',
    color:'white',
  },
  label:{
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'regular',
  },
  input: {
    height: 40,
    borderRadius:10,
    borderColor: '#9D9D9D',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: 250,
  },
  selector:{
    backgroundColor: 'D9D9D9',
    borderColor: '9D9D9D',
    borderWidth:1,
    overflow:'viseble',
  },
  buttonForm:{
    borderRadius:30,
    marginVertical:10,
  },



  entityInfo: {
    backgroundColor: 'yellow'

  }

});

export default styles;
