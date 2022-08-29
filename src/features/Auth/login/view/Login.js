import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { styles } from './styles';
import MainWrapper from '@components/MainWrapper';

const Login = () => {

  const { colors } = useTheme();
  const {navigate} = useNavigation();

  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] =  useState(false);

  return (
    <MainWrapper scrollBar={true}>
        <View style={styles().mainContainer}>
          <Image source={require('@assets/images/login.jpg')} resizeMode="cover" style={styles().loginImage} />

          <View style={{ marginTop: 20 }}></View>

          <Text style={styles().title}>
            Login
          </Text>

          <View style={styles().inputContainer}>
            <Icon size={24} name="at-outline" />
            <TextInput
              style={styles().textInput}
              label="Email"
              value={text}
              mode="flat"
              onChangeText={text => setText(text)}
              keyboardType="email-address"
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
          <Button style={styles(colors.primary).loginButton} 
            mode='contained' onPress={() => navigate('Home')}>
            Login
          </Button>

          <View style={styles().footerSection}>
            <Text>Already have account, </Text>
            <TouchableOpacity onPress={() => navigate('Register')}>
              <Text style={styles(colors.primary).linkText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
    </MainWrapper>
  )
}

export default Login