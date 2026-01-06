import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SettingsScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingTextStyle}>
        Theme and Language Support Coming Soon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 15,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingTextStyle: {
    fontSize: 22,
    fontWeight: 500,
    padding: 30,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 24,
    textAlign: 'center',
  },
});

export default SettingsScreen;
