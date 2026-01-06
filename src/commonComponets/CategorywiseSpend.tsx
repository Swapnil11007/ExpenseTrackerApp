import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { getExpenseDataFromRedux } from '../redux/reducers';

const ColorArray = ['#f17768', '#6cc395', '#db71b293', '#61aed1',  '#ecb750'];

function CategorywiseSpend({ totalExpense }: { totalExpense: number }) {
  const expenseData = useSelector(getExpenseDataFromRedux);

  const categorywiseSpend = expenseData.reduce((spendsObj, expenseItem) => {
    console.log(spendsObj, expenseItem, expenseItem.category);
    spendsObj[expenseItem.category] =
      (spendsObj[expenseItem.category] || 0) + parseFloat(expenseItem.amount);
    console.log(spendsObj);

    return spendsObj;
  }, {});

  return (
    <View style={styles.mainContaine}>
      <Text style={styles.titleText}>Categorywise Spends</Text>
      <LinearGradient
        colors={['#dfddddff', '#0099e0ff', '#dfddddff']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.9, y: 0.9 }}
        style={{ height: 2, borderRadius: 5 }}
      />
      <View style={styles.barStyle}>
        {Object.entries(categorywiseSpend).map((cat, index) => (
          <View
            style={{
              backgroundColor: ColorArray[index],
              flex: cat[1] / totalExpense,
            }}
            key={index}
          />
        ))}
      </View>
      <View style={styles.spendBarStyle}>
        {Object.entries(categorywiseSpend).map((cat, index) => {
          return (
            <View key={index} style={styles.row}>
              <View
                style={StyleSheet.flatten([
                  styles.circleStyle,
                  { backgroundColor: ColorArray[index] },
                ])}
              />
              <Text style={styles.textStyle}>{cat[0]}</Text>
              <Text style={styles.textStyleSpend}>{cat[1]}</Text>
            </View>
          );
        })}
      </View>
      {/* <AppButton
        label="View all categories"
        onPress={() => console.log('btn pressend')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContaine: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 30,
    gap: 24,
  },
  titleText: { fontSize: 22, textAlign: 'center' },
  spendBarStyle: {
    gap: 10,
  },
  textStyle: {
    fontSize: 18,
    flex: 1,
  },
  textStyleSpend: {
    fontSize: 18,
    minWidth: '20%',
  },
  barStyle: {
    width: '100%',
    flexDirection: 'row',
    height: 40,
    gap: 2,
    borderRadius: 24,
    overflow: 'hidden',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  circleStyle: {
    width: 25,
    height: 25,
    borderRadius: 12,
  },
});

export default CategorywiseSpend;
