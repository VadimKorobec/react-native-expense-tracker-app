import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { store } from "./store/store";
import { StatusBar } from "expo-status-bar";
import { RootStackParamList, RootTabParamList } from "./types/navigation";
import { Ionicons } from "@expo/vector-icons";

import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";

import { GlobalStyles } from "./constanst/styles";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const ExpensesOverview = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTitleAlign: "center",
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenseScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
