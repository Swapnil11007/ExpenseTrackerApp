import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import SettingsScreen from './settings/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ExpenseHistoryScreen from './history/ExpenseHistoryScreen';

const Tab = createBottomTabNavigator();

const tabIcon = (name: string, color: string, size: number) => (
  <Icon name={name} color={color} size={size} />
);

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#85409D',
        },
        // headerTintColor: 'Bl',
        tabBarActiveTintColor: '#fd7b3eff',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 14 },
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
  );
}

export default BottomNavigation;
