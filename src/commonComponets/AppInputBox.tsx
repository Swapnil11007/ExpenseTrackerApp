import React, { useState } from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type InputTypeProps = {
  value: string;
  type?: 'AmountInput' | 'Discription' | '';
  onChangeText: (text?: string) => void;
  label?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
};

const IconsArray = {
  AmountInput: 'currency-inr',
  Discription: 'note-text-outline',
};

function AppInputBox({
  value = '',
  type = '',
  onChangeText,
  label = '',
  placeholder = '',
  keyboardType = 'default',
}: InputTypeProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.btnText}>{label}</Text>
      <View
        style={StyleSheet.flatten([
          styles.container,
          focused && { borderColor: '#fd7b3eff' },
        ])}
      >
        {type && <Icon name={IconsArray[type]} color={'black'} size={28} />}
        <TextInput
          value={value}
          style={styles.inputText}
          keyboardType={keyboardType}
          selectionColor={'#000000ff'}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={text => onChangeText(text)}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: 10,
  },
  container: {
    flexDirection: 'row',
    height: 65,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 5,
  },
  btnText: { fontSize: 22, color: '#000000ff', fontWeight: 500 },
  inputText: { flex: 1, fontSize: 24, color: 'black' },
});

export default AppInputBox;
