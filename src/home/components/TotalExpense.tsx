import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../../commonComponets/AppButton';
import { useNavigation } from '@react-navigation/native';

function TotalExpense() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headingTextStyle}>Total Spends</Text>
        <Text style={styles.totalSpendTextStyle}> ₹ 1000000000</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          label="Add Expense"
          onPress={() => navigation.navigate('ExpenseCreationScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 10,
  },
  headingTextStyle: {
    fontSize: 18,
    fontWeight: 400,
  },
  totalSpendTextStyle: {
    fontSize: 25,
    fontWeight: 500,
  },
  btnContainer: { flex: 1, maxWidth: '45%' },
});

export default TotalExpense;
