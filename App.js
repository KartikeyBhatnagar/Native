// App.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import LeftNav from './src/components/LeftNav';
import { getMockData } from './src/services/mockService';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutUs from './src/screens/AboutUs';
import Contact from './src/screens/Contact';
import Play from './src/screens/Play';

const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState({
    header: '',
    footer: '',
    leftNav: [],
    body: ''
  });

  useEffect(() => {
    const mockData = getMockData();
    setData(mockData);
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header title={data.header} />
        <View style={styles.main}>
          <LeftNav items={data.leftNav} />
          <View style={styles.content}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="About Us" component={AboutUs} />
              <Stack.Screen name="Contact" component={Contact} />
              <Stack.Screen name="Play" component={Play} />
            </Stack.Navigator>
          </View>
        </View>
        <Footer content={data.footer} />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
});

export default App;
