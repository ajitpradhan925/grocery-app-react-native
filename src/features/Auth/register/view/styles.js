import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale, scale } from 'react-native-size-matters';

export const styles = (primary) =>
    EStyleSheet.create({
        mainContainer: {
            flex: 1,
            // paddingHorizontal: '5%',
            paddingVertical: '10%'
        },
        loginImage: { height: moderateScale(150), width: '60%', alignSelf: 'center' },
        title: { fontSize: scale(18), fontWeight: 'bold', marginTop: moderateScale(20) },
        inputContainer: { flexDirection: 'row', alignItems: 'center', marginTop: moderateScale(25), },
        textInput: { flexGrow: 1, marginLeft: scale(10), backgroundColor: 'transparent' },
        loginButton: { marginTop: moderateScale(50), padding: moderateScale(10), borderRadius: moderateScale(10), backgroundColor: primary },
        footerSection: { marginTop: moderateScale(30), flexDirection: 'row', justifyContent: 'center' },
        linkText: { color: primary, fontWeight: 'bold' }
    })
