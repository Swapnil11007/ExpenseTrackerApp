import React, { useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppInputBox from '../commonComponets/AppInputBox';
import AppButton from '../commonComponets/AppButton';
import { storeExpenseData } from '../storage';
import { useDispatch, useSelector } from 'react-redux';
import expenseReducer, { getExpenseDataFromRedux } from '../redux/reducers';
import { addExpense } from '../redux/actions';

function ExpenseCreationScreen({ navigation }) {
  const expenseData = useSelector(getExpenseDataFromRedux);
  const [data, setData] = useState();
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

  const addExpenseData = () => {
    dispatch(addExpense(data));
    storeExpenseData([data, ...expenseData])
      .then(msg => {
        Alert.alert(msg);
      })
      .catch(err => {
        Alert.alert(err);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <AppInputBox
          type="AmountInput"
          onChangeText={text => {
            setData(prev => ({ ...prev, amount: text }));
          }}
          label="Amount"
          placeholder=""
          keyboardType="numeric"
        />

        <AppInputBox
          type="Discription"
          onChangeText={text => {
            setData(prev => ({ ...prev, discription: text }));
          }}
          label="Discription"
          placeholder="Enter Your discription"
        />
      </View>
      <AppButton label="Save Expense" onPress={addExpenseData} />
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
  },
});

export default ExpenseCreationScreen;
