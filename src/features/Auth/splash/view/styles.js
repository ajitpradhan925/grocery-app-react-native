import EStyleSheet from 'react-native-extended-stylesheet';
// import Constant from '@Constants';

// console.log(Constant);
// const { THEME: {primary, secondary} } = Constant;

export const styles = (primary) =>
    EStyleSheet.create({
          slide: {
            flex: 1,
            alignItems: "center",
            backgroundColor: '#ffffff',
            paddingStart: "18%",
            paddingRight: "18%",
            justifyContent: 'center'
          },
          image: {
            width: 250,
            height: 250,
            marginBottom: 10 
            // resizeMode: "contain",
          },
          title: {
            color: '#000',
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: '10%'
          },
          text: {
            textAlign: "center",
            marginTop: 20
          },
          buttonStyle: {
            marginTop: 50,
            borderRadius: 40,
            width: '100%',
            padding: 5,
            backgroundColor: primary
          }
       
    })
