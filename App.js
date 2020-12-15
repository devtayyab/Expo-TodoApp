import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Provider} from 'react-redux'
import { store} from './store/index'
import {Display} from './component/display'
import {Setdata} from './component/settodo'
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>TODO APP</Text>
      <Setdata></Setdata>
      <Display></Display>
      </ScrollView>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:50,
   
  }

});
