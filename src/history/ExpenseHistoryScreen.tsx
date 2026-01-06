import React from 'react';
import RecentExpenses from '../home/components/RecentExpenses';
import { getExpenseDataFromRedux } from '../redux/reducers';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

function ExpenseHistoryScreen() {
  const expenseData = useSelector(getExpenseDataFromRedux);

  return (
    <View style={[styles.container, !expenseData.length && styles.justifyCenter]}>
      <RecentExpenses expenseData={expenseData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 15,
    gap: 10,
    alignItems:'center',
  },
  justifyCenter:{
    justifyContent:'center',
  }
});

export default ExpenseHistoryScreen;
