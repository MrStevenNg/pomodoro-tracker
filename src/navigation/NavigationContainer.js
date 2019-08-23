import { createStackNavigator, createAppContainer } from "react-navigation";

// Screens
import MainScreen from "../screens/MainScreen";

import WhiteScreen from "../screens/WhiteScreen";

const StackNavigator = createStackNavigator(
    {
        MainScreen: MainScreen,
        WhiteScreen: WhiteScreen
    },
    {
        initialRouteName: "MainScreen",
        defaultNavigationOptions: {
            header: null
        }
    }
);

const NavigationContainer = createAppContainer(StackNavigator);

export default NavigationContainer;
