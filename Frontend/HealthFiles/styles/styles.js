import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:40,
    paddingVertical:30,
  },
  container1: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor:'#2B7CB8',
    color:'white',
    paddingHorizontal:40,
    paddingVertical:15,
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
  },

  // Disenos para pantallas de Inicio de Sesion y Registro
  subtitulos1: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0477BE',
    marginTop: 10,
    width: 400,
    alignSelf: 'center',
  },
  subtitulos2: {
    fontSize: 20,
    color: '#000',
    marginTop: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginHorizontal: 40
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingStart: 10,
    width: '80%',
    height: 60,
    padding: 10,
    borderRadius: 12,
    backgroundColor: 'white',
    paddingVertical: 22,
    marginHorizontal: 30
  },
  subtitulos_2: {
    fontSize: 19,
    color: '#000',
    marginTop: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginHorizontal: 40
  },
  textInputSU: {
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingStart: 10,
    width: '80%',
    height: 59,
    padding: 10,
    borderRadius: 12,
    backgroundColor: 'white',
    paddingVertical: 20,
    marginHorizontal: 40
  },
  datePicker:{
    height: 120,
    marginTop: -10,
  },
  pickerButton:{
    paddingHorizontal: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 14,
    fontWeight: "500",
    color: "#fff"
  },
  subtitulos_1: {
    fontSize: 25,
    color: '#000',
    marginTop: 30,
    alignSelf: 'flex-start',
    marginHorizontal: 40,
  },
  subtitulo_2: {
    fontSize: 25,
    color: '#000',
    marginTop: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 40
  },
  imagen: {
    width: '50%',
    maxHeight: 200,
    marginTop: -15,
    opacity: 50,
    alignItems: 'center',
    padding: 20,
    maxWidth: 300,
  },
  textInputSI: {
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingStart: 10,
    width: '80%',
    height: 55,
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  containerCheckBox:{
    flexDirection:'column',
    alignItems:'center',
    marginBottom:30,
  },

  //DISENOS PARA INICIO DE SESION CON GOOGLE
  containerG: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  container1G: {
      backgroundColor: '#DCDCDC',
      alignContent: 'center',
      alignItems: 'center',
      marginHorizontal: 35,
    },
  subtitulos2G: {
    fontSize: 23,
    color: 'gray',
    marginTop: -60,
    alignContent: 'center',
    marginHorizontal: 40,
    marginVertical: 30,
  },
  imagenG: {
    width: '40%',
    maxHeight: 200,
    marginTop: 10,
    alignSelf: 'center',
    maxWidth: 300,
  },
  imagen2G: {
      width: '29%',
      maxHeight: 200,
      opacity: 50,
      alignItems: 'center',
      maxWidth: 300,
    },
  textInputG: {
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingStart: 10,
    width: '85%',
    height: 55,
    padding: 15,
    backgroundColor: 'white',
    paddingVertical: 20,
    fontSize: 15,
    marginTop: -15
  },
  calendario:{
    borderRadius: 10,
    shadowColor: '#000',
  },
});

export default styles;
