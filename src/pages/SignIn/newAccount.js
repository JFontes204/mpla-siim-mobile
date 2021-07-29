import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function NewAccountScreen({ navigation }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={[styles.container, { backgroundColor: '#fafafa' }]}>
      <Text style={styles.inputText}>Email</Text>
      <View style={styles.inputContainer}>
        <FontAwesome style={styles.icon} name="send" color="#05375a" size={20} />
        <TextInput
          style={styles.inputInLogin}
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

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
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.loginBtnText}>Criar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnInLogin, { backgroundColor: '#f0d700' }]}
          onPress={() => {
            return navigation.toggleDrawer();
          }}
        >
          <Text style={styles.loginBtnText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
