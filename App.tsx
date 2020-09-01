import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

const App: React.FC = () => {
  return (
    <View>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
