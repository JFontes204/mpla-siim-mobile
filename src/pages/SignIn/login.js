import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles';
import {
  View,
  Button,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard,
} from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: '100%',
          marginTop: '20%',
        }}
      >
        <Image style={{ height: 148 }} source={require('../../../assets/siim.png')} />
      </View>
      <Animated.View style={styles.container}>
        <Text style={styles.inputText}>Nome de utilizador</Text>
        <View style={styles.inputContainer}>
          <FontAwesome style={styles.icon} name="user-o" color="#05375a" size={20} />
          <TextInput
            style={styles.inputInLogin}
            autoCorrect={false}
            autoCapitalize="none"
            value={username}
            onChangeText={(username) => setUsername(username)}
          />
        </View>

        <Text style={styles.inputText}>Senha</Text>
        <View style={styles.inputContainer}>
          <Feather style={styles.icon} name="lock" color="#05375a" size={20} />
          <TextInput
            style={styles.inputInLogin}
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={[styles.btnInLogin, { backgroundColor: '#cb0e08' }]}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={styles.loginBtnText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnInLogin, { backgroundColor: '#f0d700' }]}
            onPress={() => {
              /* return navigation.navigate("NewAccount") */
              return navigation.toggleDrawer();
            }}
          >
            <Text style={styles.loginBtnText}>Menu lateal</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={styles.linkText}
          onPress={() => {
            /* return navigation.navigate("ForgetPass") */
            return navigation.navigate('ForgetPass');
          }}
        >
          Esqueceu a senha?
        </Text>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
