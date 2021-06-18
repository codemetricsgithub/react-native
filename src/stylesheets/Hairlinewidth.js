import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Hairlinewidth = () => (
  <View style={styles.container}>
    <Text style={styles.row}> any Text will draw first like text 1</Text>
    <Text style={styles.row}>text 1 just below draw a line like thin </Text>

    <Text style={styles.row}>
      again same funda will reapeate first text will appear then line
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  row: {
    padding: 4,
    borderBottomColor: 'blue',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Hairlinewidth;
