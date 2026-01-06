/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BottomNavigation from './src/BottomNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpenseCreationScreen from './src/home/ExpenseCreationScreen';
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* <AppContent /> */}
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
              <Stack.Navigator
                screenOptions={
                  {
                    // headerShown: false,
                  }
                }
              >
                <Stack.Screen
                  name="main"
                  component={BottomNavigation}
                  options={({ route }) => ({
                    headerShown: false,
                  })}
                />
                <Stack.Screen
                  name="ExpenseCreationScreen"
                  component={ExpenseCreationScreen}
                  options={{
                    title: 'Add Expense',
                  }}
                />
                {/* <BottomNavigation /> */}
              </Stack.Navigator>
              
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
