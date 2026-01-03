import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const category = {
  Food: 40,
  Transport: 30,
  Shopping: 20,
  Bill: 10,
  // Others: 1 // TODO: need to add this other cat also
};

const ColorArray = ['#f17768', '#6cc395', '#61aed1', '#ecb750'];
function CategorywiseSpend() {
  return (
    <View style={styles.mainContaine}>
      <Text style={styles.titleText}>Categorywise Spends</Text>
      <LinearGradient
        colors={['#dfddddff', '#0099e0ff', '#dfddddff']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.9, y: 0.9 }}
        style={{ height: 2, borderRadius: 5 }}
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          height: 40,
          gap: 2,
          borderRadius: 24,
          overflow: 'hidden',
        }}
      >
        {Object.entries(category).map((cat, index) => (
          <View
            style={{ backgroundColor: ColorArray[index], flex: cat[1] / 100 }}
            key={index}
          />
        ))}
        {/* replace 100 by total */}
      </View>
      <View style={styles.spendBarStyle}>
        {Object.entries(category).map((cat, index) => {
          console.log(cat);
          return (
            <View
              key={index}
              style={{
                width: '100%',
                flexDirection: 'row',
                gap: 10,
              }}
            >
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: ColorArray[index],
                  borderRadius: 12,
                }}
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
});

export default CategorywiseSpend;
