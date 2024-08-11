// src/screens/ContactScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Contact Screen</Text>
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

export default Contact;
