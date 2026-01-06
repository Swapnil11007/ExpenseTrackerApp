import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import SettingsScreen from './settings/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ExpenseHistoryScreen from './history/ExpenseHistoryScreen';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const tabIcon = (name: string, color: string, size: number) => (
  <Icon name={name} color={color} size={size} />
);

function BottomNavigation() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#85409D',
          },
          // headerTintColor: 'Bl',
          tabBarActiveTintColor: '#fd7b3eff',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={({ route }) => ({
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => tabIcon('home', color, size),
            // route dont have state
            // tabBarStyle: {
            //   display: route.state?.index > 0 ? 'none' : 'flex',
            // },
          })}
        />
        <Tab.Screen
          name="History"
          component={ExpenseHistoryScreen}
          options={{
            headerTitle: 'Expense History',
            tabBarIcon: ({ color, size }) => tabIcon('history', color, size),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => tabIcon('cog', color, size),
          }}
        />
      </Tab.Navigator>
      <View style={styles.addExpenseBtnContainer}>
        <Text
          style={styles.btnText}
          onPress={() => navigation.navigate('ExpenseCreationScreen')}
        >
          {'+'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addExpenseBtnContainer: {
    position: 'absolute',
    bottom: 110,
    right: 10,
    width: 70,
    height: 70,
    backgroundColor: '#fd7b3eff',
    // overflow: 'hidden',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 75,
    // backgroundColor: '#af757595',
    lineHeight: 75,
  },
});

export default BottomNavigation;
