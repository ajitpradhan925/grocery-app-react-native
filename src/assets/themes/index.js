import { DefaultTheme } from '@react-navigation/native';


export const MyLightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3a9026',
    },
  };