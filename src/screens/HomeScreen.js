// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Text style={styles.subtitle}>Here is some introductory content for your app.</Text>
      <Text style={styles.body}>
        This is the home page where you can provide users with important information, updates, or features of your app. 
        Use this space to engage users with relevant content, announcements, or a brief overview of what your app offers.
      </Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default HomeScreen;
