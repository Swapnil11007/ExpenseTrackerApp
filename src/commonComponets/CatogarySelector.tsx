import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CATEGORY_ICON, EXPENSE_CATEGORIES } from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CatogarySelector({ selected, setSelected }) {
  return (
    <View style={{ width: '100%', gap: 5 }}>
      <Text style={styles.inputText}>Category</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Object.entries(EXPENSE_CATEGORIES).map((item, index) => (
          <TouchableOpacity
            style={[
              styles.btnContainer,
              selected === item[1] && { borderColor: '#fd7b3eff' },
            ]}
            key={index}
            onPress={() => {
              setSelected(item[1]);
            }}
          >
            <Icon
              name={CATEGORY_ICON[item[1]]}
              color={selected === item[1] ? '#fd7b3eff' : 'gray'}
              size={40}
            />
            <Text
              style={[
                styles.btnText,
                selected === item[1] && { color: '#fd7b3eff' },
              ]}
            >
              {item[1]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: 10,
  },
  btnContainer: {
    minWidth: 80,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 24,
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: { fontSize: 18, color: '#000000ff' },
  inputText: { fontSize: 22, color: 'black', fontWeight: 500 },
});

export default CatogarySelector;
