import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text, View, TextInput } from 'react-native';
import styles from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ForgetPassScreen({ navigation }) {
  const [username, setUsername] = useState();
  return (
    <View style={[styles.container, { backgroundColor: '#fafafa' }]}>
      <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Text style={styles.inputText}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome style={styles.icon} name="send" color="#05375a" size={20} />
          <TextInput
            style={styles.inputInLogin}
            autoCorrect={false}
            autoCapitalize="none"
            value={username}
            onChangeText={(username) => setUsername(username)}
          />
        </View>

        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={[styles.btnInLogin, { backgroundColor: '#cb0e08', width: 150 }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.loginBtnText}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnInLogin, { backgroundColor: '#f0d700', width: 150 }]}
            onPress={() => {
              return navigation.goBack();
            }}
          >
            <Text style={styles.loginBtnText}>Voltar ao Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
