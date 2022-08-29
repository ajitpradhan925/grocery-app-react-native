import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { styles } from './styles';
import { moderateScale } from 'react-native-size-matters';
import MainWrapper from '@components/MainWrapper';

const Register = () => {
  const { colors } = useTheme();
  const {navigate} = useNavigation();

  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <MainWrapper scrollBar={true}>
        <View style={styles().mainContainer}>
          <Image source={require('@assets/images/register.jpg')} resizeMode="cover" style={styles().loginImage} />

          <View style={{ marginTop: moderateScale(20) }}></View>

          <Text style={styles().title}>
            Register User
          </Text>

          <View style={styles().inputContainer}>
            <Icon size={24} name="person-outline" />
            <TextInput
              style={styles().textInput}
              label="Name"
              value={text}
              mode="flat"
              onChangeText={text => setText(text)}
              keyboardType="email-address"
            />
          </View>

          <View style={styles().inputContainer}>
            <Icon size={24} name="at-outline" />
            <TextInput
              style={styles().textInput}
              label="Email"
              value={text}
              mode="flat"
              onChangeText={text => setText(text)}
            />
          </View>

          <View style={styles().inputContainer}>
            <Icon size={24} name="lock-closed-outline" />

            <TextInput
              label="Password"
              style={styles().textInput}
              value={password}
              right={<TextInput.Icon name="eye" />}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <Button onPress={() => navigate('Home')} style={styles(colors.primary).loginButton} mode='contained'>
            Register
          </Button>

          <View style={styles().footerSection}>
            <Text>Already have account, </Text>
            <TouchableOpacity onPress={() => navigate('Login')}>
              <Text style={styles(colors.primary).linkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
    </MainWrapper>
  )
}

export default Register