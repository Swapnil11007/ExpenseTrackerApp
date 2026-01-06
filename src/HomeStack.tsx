import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home/HomeScreen';
import DetailsScreen from './home/DetailsScreen';
import ExpenseCreationScreen from './home/ExpenseCreationScreen';
const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      {/* <Stack.Screen
        name="ExpenseCreationScreen"
        component={ExpenseCreationScreen}
        options={{
          title: 'Add Expense',
        }}
      /> */}
    </Stack.Navigator>
  );
}
