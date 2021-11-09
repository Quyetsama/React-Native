import React from 'react';
import { Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{color: 'red'}}>
        Quyết Sama! 🎉
      </Text>
      <Text>
        Hello <Text style={{color: 'blue'}}>everyone</Text>
      </Text>
    </View>
  );
}

export default YourApp;
