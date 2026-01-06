import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import TotalExpense from './components/TotalExpense';
import CategorywiseSpend from '../commonComponets/CategorywiseSpend';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenseDataFromRedux } from '../redux/reducers';
import RecentExpenses from './components/RecentExpenses';

function HomeScreen({ navigation }) {
  const expenseData = useSelector(getExpenseDataFromRedux);

  const totalExpense = expenseData.reduce(
    (val, ele) => val + Number.parseFloat(ele.amount),
    0,
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        <TotalExpense totalExpense={totalExpense} />
        <CategorywiseSpend totalExpense={totalExpense} />
        <RecentExpenses
          expenseData={
            expenseData.length > 10 ? expenseData.slice(0, 10) : expenseData
          }
          onlyShowRecenttransactions
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    gap: 10,
  },
  headingTextStyle: {
    fontSize: 22,
    fontWeight: 500,
  },
});

export default HomeScreen;
