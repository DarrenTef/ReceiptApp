/**
 * SettingsScreen.tsx
 * 
 * Settings component.
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ISettingsScreenDrawerProps } from '../routes';


export default function SettingsScreen(props: ISettingsScreenDrawerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});