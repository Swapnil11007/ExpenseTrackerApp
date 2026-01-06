import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CATEGORY_ICON } from '../constants';
import { useNavigation } from '@react-navigation/native';



function ExpenseCard({ expenseItem }: { expenseItem: any }) {
  const navigation = useNavigation();
  return (
    <Pressable
     style={styles.mainContainer}
       onPress={()=>navigation.navigate('ExpenseCreationScreen', {expenseItem, viewDetails: true})}
     >
      <View style={styles.avtarContainer}>
        <Icon
          name={CATEGORY_ICON[expenseItem.category]}
          color={'white'}
          size={38}
        />
      </View>
      <View style={styles.flex1}>
        <Text style={styles.textStyle}>{`₹ ${expenseItem.amount}`}</Text>
        <Text style={styles.discText}>{expenseItem.discription}</Text>
      </View>
      <Text style={styles.textStyle}>{expenseItem.date}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
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
