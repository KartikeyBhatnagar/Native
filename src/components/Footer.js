import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ content }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Footer;