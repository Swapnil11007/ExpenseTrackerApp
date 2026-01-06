import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TotalExpense from './components/TotalExpense';
import CategorywiseSpend from '../commonComponets/CategorywiseSpend';
import { getExpenseData, storeExpenseData } from '../storage';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenseDataFromRedux } from '../redux/reducers';
import { setExpenseData } from '../redux/actions';
import ExpenseCard from '../commonComponets/ExpenseCard';
import RecentExpenses from './components/RecentExpenses';

function HomeScreen({ navigation }) {
  const expenseData = useSelector(getExpenseDataFromRedux);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);


    useEffect(() => {
    console.log('expenseData 11111',expenseData)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    storeExpenseData(expenseData)
      .then(msg => {
        Alert.alert(msg);
        // navigation.pop();
      })
      .catch(err => {
        Alert.alert(err);
      });
  }, [expenseData]);

  useEffect(function () {
    const abc = async () => {
      const data = await getExpenseData();
      dispatch(setExpenseData(data));
    };
    abc();

    // return () => {
    //   storeExpenseData(expenseData);
    // };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TotalExpense />
        <CategorywiseSpend />
        <RecentExpenses expenseData={expenseData} onlyShowRecenttransactions />
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
