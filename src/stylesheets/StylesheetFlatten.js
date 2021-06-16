import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StylesheetFlatt = () => (
  <View style={page.container}>
    <Text style={flattenStyle}>React Native</Text>
    <Text>Flatten Style</Text>
    <Text style={page.code}>{JSON.stringify(flattenStyle, null, 2)}</Text>
  </View>
);

const page = StyleSheet.create({
  container: {
    flex: 0,
    padding: 24,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  code: {
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },
});

const typography = StyleSheet.create({
  header: {
    color: '#61dafb',
    fontSize: 30,
    marginBottom: 36,
  },
});

const flattenStyle = StyleSheet.flatten([page.text, typography.header]);

export default StylesheetFlatt;
