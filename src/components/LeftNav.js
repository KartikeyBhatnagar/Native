// src/components/LeftNav.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LeftNav = ({ items = [] }) => {
  const navigation = useNavigation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width] = useState(new Animated.Value(200)); // Initial width value, adjust as needed

  const toggleCollapse = () => {
    Animated.timing(width, {
      toValue: isCollapsed ? 200 : 60, 
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsCollapsed(!isCollapsed);
  };

  return (
    <Animated.View style={[styles.nav, { width }]}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.toggleButton}>
        <Icon
          name={isCollapsed ? 'chevron-right' : 'chevron-left'}
          size={20}
          color="#333"
        />
      </TouchableOpacity>
      {!isCollapsed && items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(item)} // Navigate to screen name
          style={styles.navItem}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  nav: {
    
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  toggleButton: {
    padding: 5,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  navItem: {
    marginVertical: 10,
    fontSize: 16,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default LeftNav;
