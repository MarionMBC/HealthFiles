import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingHorizontal:40,
    paddingVertical:30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor:'#2B7CB8',
    color:'white',
    paddingHorizontal:40,
    paddingVertical:30,
    textAlign:'center',
  },
  label:{
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
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

  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },

  buttonsContainer2: {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },


  entityInfo: {
    backgroundColor: 'yellow'

  }

});

export default styles;
