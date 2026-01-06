import React, { useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppInputBox from '../commonComponets/AppInputBox';
import AppButton from '../commonComponets/AppButton';
import { storeExpenseData } from '../storage';
import { useDispatch, useSelector } from 'react-redux';
import expenseReducer, { getExpenseDataFromRedux } from '../redux/reducers';
import { addExpense, deleteExpense, editExpense } from '../redux/actions';
import CatogarySelector from '../commonComponets/CatogarySelector';
import { EXPENSE_CATEGORIES } from '../constants';

function ExpenseCreationScreen({ navigation, route }) {
  const expenseData = useSelector(getExpenseDataFromRedux);

  const [data, setData] = useState({
    amount: '',
    discription: '',
  });
  const [selected, setSelected] = useState(EXPENSE_CATEGORIES.OTHER);
  const [viewDetails, setViewDetails] = useState(false);
  // const [editDetails, setEditDetails] = useState(false);

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });

    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'flex' },
      });
  }, [navigation]);

  useLayoutEffect(() => {
    const { expenseItem, viewDetails: viewDetail } = route?.params || {};
    if (expenseItem) {
      // viewDetail ? setViewDetails(true) : setEditDetails(true);
      setViewDetails(true);
      setData(route.params.expenseItem);
      setSelected(route.params.expenseItem.category);
      navigation?.setOptions({
        headerTitle: viewDetail ? 'Expense Details' : 'Edit Expense',
      });
    }
  }, []);

  const addExpenseData = () => {
    if (Number.isNaN(Number.parseFloat(data.amount))) {
      Alert.alert('Enter correct amount');
      return;
    }
    let dataClone = { ...data };
    dataClone.category = selected;
    if (!viewDetails) {
      dataClone.date = new Date().toDateString().split(' ').slice(1).join(' ');
      dataClone.id = new Date().getTime();
    }
    dispatch(viewDetails ? editExpense(dataClone) : addExpense(dataClone));
    navigation.pop();
  };

  const removeExpense = () => {
    Alert.alert('Remove Expense', 'This Expense will deleted permanety', [
      { text: 'cancel' },
      {
        text: 'delete',
        onPress: () => {
          dispatch(deleteExpense(data.id));
          navigation.pop();
        },
      },
    ]);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <AppInputBox
          value={data.amount}
          type="AmountInput"
          onChangeText={text => {
            setData(prev => ({ ...prev, amount: text }));
          }}
          label="Amount"
          placeholder="0.0"
          keyboardType="numeric"
        />

        <AppInputBox
          value={data.discription}
          type="Discription"
          onChangeText={text => {
            setData(prev => ({ ...prev, discription: text }));
          }}
          label="Discription"
          placeholder="Enter Your discription"
        />
        <CatogarySelector setSelected={setSelected} selected={selected} />
      </View>
      <View style={{ width: '100%', flexDirection: 'row', gap: 10 }}>
        <View style={{ flex: 1 }}>
          {/* {viewDetails && ( */}
          <AppButton
            label={viewDetails ? 'Edit Details' : 'Save Expense'}
            onPress={addExpenseData}
          />
          {/* )} */}
        </View>
        {viewDetails && (
          <View style={{ flex: 1 }}>
            <AppButton label={'Delete Expense'} onPress={removeExpense} />
          </View>
        )}
        {/* ()=>navigation.navigate('ExpenseCreationScreen', {expenseItem, viewDetails: true}) */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 15,
    gap: 10,
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    gap: 15,
  },
});

export default ExpenseCreationScreen;
