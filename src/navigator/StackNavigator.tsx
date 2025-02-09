
import { RegisterScreen } from "../screens/RegisterScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Catalog } from "../screens/Catalog";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Productos" component={Catalog} />
      </Stack.Navigator>
    );
  };
