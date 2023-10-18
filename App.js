import {React, useCallback} from "react";
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";

import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Play from "./components/play/Play";
import Setting from "./components/setting/Setting";
import Mypage from "./components/mypage/Mypage";
//import Shop from "./components/shop/Shop";

import ProductDetail from "./components/shop/ProductDetail";
import ProductList from "./components/shop/ProductList";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={TabNavi}
        options={{
          headerShown: true,
          header: () => <Header title="header" />,
        }}
      />
      <Stack.Screen name="Play" component={Play} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

const Shop = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductList} options={{headerShown: false}} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

const TabNavi = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shop"
        options={{
          headerShown: false,
        }}>
        {() => <Shop />}
      </Tab.Screen>
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    고령딸기체: require("./assets/fonts/고령딸기체+TTF.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
  },
});
