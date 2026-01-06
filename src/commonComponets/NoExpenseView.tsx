import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from './AppButton';
import { useNavigation } from '@react-navigation/native';

function NoExpenseView({ size = 100, showAddExpBtn = false }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon name={'timer-cog-outline'} color={'orange'} size={size} />
      <Text style={styles.textStyle}>
        You have not added any expense till now.
      </Text>
      {showAddExpBtn && (
        <AppButton
          label="Add Expense"
          onPress={() => navigation.navigate('ExpenseCreationScreen')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 24,
    gap: 15,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default NoExpenseView;
