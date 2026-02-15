import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
// import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
