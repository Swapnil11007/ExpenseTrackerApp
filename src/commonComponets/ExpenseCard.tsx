import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EXPENSE_CATEGORIES = {
  FOOD: 'Food',
  TRANSPOPRT: 'Transport',
  SHOPPING: 'Shopping',
  BILL: 'Bill',
  OTHER: 'Other',
};
const CategoryIcons = {
  [EXPENSE_CATEGORIES.FOOD]: 'food-outline',
  [EXPENSE_CATEGORIES.TRANSPOPRT]: 'train-car',
  [EXPENSE_CATEGORIES.SHOPPING]: 'shopping-outline',
  [EXPENSE_CATEGORIES.BILL]: 'note-text-outline',
  [EXPENSE_CATEGORIES.OTHER]: 'dots-horizontal',
};

function ExpenseCard({ expenseItem }: { expenseItem: any }) {
  expenseItem = {
    amount: 100,
    discription: 'not clear',
    category: 'Bill',
    date: '10/11/2025',
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.avtarContainer}>
        <Icon
          name={CategoryIcons[expenseItem.category]}
          color={'white'}
          size={38}
        />
      </View>
      <View style={styles.flex1}>
        <Text style={styles.textStyle}>{`₹ ${expenseItem.amount}`}</Text>
        <Text style={styles.discText}>{expenseItem.discription}</Text>
      </View>
      <Text style={styles.textStyle}>{expenseItem.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 10,
  },
  avtarContainer: {
    backgroundColor: '#fd7b3eff',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: { flex: 1 },
  textStyle: {
    fontSize: 20,
    fontWeight: 500,
  },
  discText: {
    fontSize: 16,
  },
});

export default ExpenseCard;
