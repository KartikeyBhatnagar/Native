
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Body = ({ content }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
  },
  bodyText: {
    fontSize: 18,
  },
});

export default Body;