import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({ onPress, label }: { onPress: () => void; label: string }) {
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      style={styles.mainContaine}
      onPress={onPress}
    >
      <Text numberOfLines={1} style={styles.btnText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContaine: {
    flexDirection: 'row',
    height: 58,
    backgroundColor: '#fd7b3eff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#e25731ff',
  },
  btnText: { flex: 1, color: 'white', fontSize: 18, textAlign: 'center' },
});

export default AppButton;
