import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AppDispatch, RootState } from "./store/store";
import { StatusBar } from "expo-status-bar";
import { RootStackParamList, RootTabParamList } from "./types/navigation";
import { Ionicons } from "@expo/vector-icons";

import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";

import IconButton from "./components/UI/IconButton";

import { GlobalStyles } from "./constanst/styles";
import { pressed } from "./store/pressedSlice";
import { useEffect } from "react";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ManageExpense"
>;

const ExpensesOverview = () => {
   const isPressed = useSelector((state: RootState) => state.pressed.isPressed);
   const dispatch = useDispatch<AppDispatch>();
   const navigation = useNavigation<NavigationProp>();

   const handlePressIcon = () => {
     dispatch(pressed(true));
   };

   useEffect(() => {
     if (isPressed) {
       navigation.navigate("ManageExpense", {});
       dispatch(pressed(false));
     }
   }, [isPressed, navigation, dispatch]);
  
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
        headerRight: ({ tintColor }) => (
          <IconButton icon="add" size={24} color={tintColor} onPress={handlePressIcon} />
        ),
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
            <Ionicons name="calendar" color={color} size={size} />
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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
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
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
