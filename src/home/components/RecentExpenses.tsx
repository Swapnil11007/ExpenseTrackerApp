import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExpenseCard from '../../commonComponets/ExpenseCard';
import NoExpenseView from '../../commonComponets/NoExpenseView';
import { useNavigation } from '@react-navigation/native';

function RecentExpenses({ expenseData, onlyShowRecenttransactions = false }) {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {onlyShowRecenttransactions && (
        <View style={styles.container}>
          <Text style={styles.headingTextStyle}>Recent Expenses</Text>

          <Text
            style={{ ...styles.headingTextStyle, color: '#fd7b3eff' }}
            onPress={() => navigation.navigate('History')}
          >
            See All
          </Text>
        </View>
      )}
      {/* TODO: Implement flatlist here */}
      {expenseData.length !== 0 ? (
        expenseData.map((item, index) => (
          <ExpenseCard expenseItem={item} key={index} />
        ))
      ) : (
        <NoExpenseView size={150} showAddExpBtn={!onlyShowRecenttransactions} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { gap: 8 },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  headingTextStyle: {
    fontSize: 22,
    fontWeight: 500,
  },
});

export default RecentExpenses;
