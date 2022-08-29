import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from 'react-native-size-matters';

export const styles = (primary) =>
    EStyleSheet.create({
         mainContent: {
            flexDirection: 'row', justifyContent: 'space-between'},
         deliveryText: { color: '#a5a6a9', fontWeight: '400' },
         locationContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
         locationNameText: { fontWeight: 'bold', fontSize: 17, color: '#000' },
         iconContainer: { flexDirection: 'row', alignItems: 'center' },
         icon: { marginLeft: 8 },
         badge: { alignSelf: 'flex-start', fontSize: 8, marginLeft: -2 }
       
    })
