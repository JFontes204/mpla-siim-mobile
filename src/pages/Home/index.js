import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
//import api from '../../services/api';

export default function Home(params) {
  const [access_token, setAccess_token] = useState('');

  useEffect(() => {
    setAccess_token('dsldklsdlncn_6876sdc377v.,67d_kadoueyhfn');
  }, []);

  // LOGOU COM SUCESSO ENTAO COLOCA O CABEÇALHO DEFAULT
  //  api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
